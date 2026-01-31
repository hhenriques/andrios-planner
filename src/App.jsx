/**
 * FILE: App.js
 * The main graph engine.
 */
import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import { initialData } from "./data";
import CustomNode from "./CustomNode";
import "./index.css";

const nodeTypes = { custom: CustomNode };

// LocalStorage key for persisting purchased nodes
const PURCHASED_NODES_KEY = "andrios-planner-purchased-nodes";

// Load purchased nodes from localStorage
const loadPurchasedNodes = () => {
  try {
    const saved = localStorage.getItem(PURCHASED_NODES_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return new Set(parsed);
    }
  } catch (error) {
    console.error("Error loading purchased nodes from localStorage:", error);
  }
  return new Set();
};

// Save purchased nodes to localStorage
const savePurchasedNodes = (purchasedSet) => {
  try {
    const array = Array.from(purchasedSet);
    localStorage.setItem(PURCHASED_NODES_KEY, JSON.stringify(array));
  } catch (error) {
    console.error("Error saving purchased nodes to localStorage:", error);
  }
};

// Build dependency map: for each node, find which nodes must be purchased first
// All edges (including cross-chain) are hard dependencies
const buildDependencyMap = () => {
  const depMap = new Map();
  
  // Initialize all nodes with empty dependency arrays
  initialData.nodes.forEach((node) => {
    depMap.set(node.id, []);
  });
  
  // For each edge, the target node depends on the source node
  // Both regular and cross-chain edges are required dependencies
  initialData.edges.forEach((edge) => {
    const deps = depMap.get(edge.target) || [];
    deps.push(edge.source);
    depMap.set(edge.target, deps);
  });
  
  return depMap;
};

const dependencyMap = buildDependencyMap();

// Check if a node can be purchased (all dependencies are purchased)
const canPurchaseNode = (nodeId, purchasedSet) => {
  const dependencies = dependencyMap.get(nodeId) || [];
  return dependencies.every((depId) => purchasedSet.has(depId));
};

// Extract unique buildings to create the side labels
const buildings = [...new Set(initialData.nodes.map((n) => n.data.building))];
// Calculate Y positions for labels (assuming they are sorted by Y in the data)
// We just find the first node of each building to get the Y
const laneLabels = buildings.map((b) => {
  const node = initialData.nodes.find((n) => n.data.building === b);
  return { name: b, y: node.position.y };
});

// Row height matches Y spacing in data (200px between each building row)
const ROW_HEIGHT = 200;
// Estimated node card height for vertical centering
const NODE_HEIGHT = 100;
// Offset to center nodes vertically in their lane
const VERTICAL_OFFSET = (ROW_HEIGHT - NODE_HEIGHT) / 2;

const SIDEBAR_WIDTH = 180;

// Process nodes to center them vertically in their lanes
const centeredNodes = initialData.nodes.map((node) => ({
  ...node,
  position: {
    ...node.position,
    y: node.position.y + VERTICAL_OFFSET,
  },
}));

function Flow() {
  // Initialize purchased nodes from localStorage
  const [purchasedNodes, setPurchasedNodes] = useState(() => loadPurchasedNodes());
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 0.5 });
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Save purchased nodes to localStorage whenever they change
  useEffect(() => {
    savePurchasedNodes(purchasedNodes);
  }, [purchasedNodes]);

  // Toggle purchased state for a node (only if dependencies are met)
  const togglePurchased = useCallback((nodeId) => {
    setPurchasedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        // Always allow unpurchasing
        next.delete(nodeId);
      } else {
        // Only allow purchasing if dependencies are met
        if (canPurchaseNode(nodeId, prev)) {
          next.add(nodeId);
        }
      }
      return next;
    });
  }, []);

  // Derive nodes with purchased state and canPurchase info
  const nodesWithPurchasedState = React.useMemo(
    () =>
      centeredNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          purchased: purchasedNodes.has(node.id),
          canPurchase: canPurchaseNode(node.id, purchasedNodes),
          dependencies: dependencyMap.get(node.id) || [],
          onTogglePurchased: () => togglePurchased(node.id),
        },
      })),
    [purchasedNodes, togglePurchased]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(centeredNodes);

  // Update nodes when purchased state changes
  React.useEffect(() => {
    setNodes(nodesWithPurchasedState);
  }, [nodesWithPurchasedState, setNodes]);

  // Initialize edges: Hide "cross-chain" edges by default
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialData.edges.map((edge) => ({
      ...edge,
      hidden: edge.data?.isCrossChain || false,
      style: edge.data?.isCrossChain
        ? {
            stroke: "#ff0072",
            strokeWidth: 2,
            strokeDasharray: "5,5",
            opacity: 0.8,
          }
        : { stroke: "#666", strokeWidth: 2 },
    }))
  );

  // Helper to update edge visibility based on selected and hovered nodes
  const updateEdgeVisibility = useCallback(
    (selectedId, hoveredId) => {
      setEdges((eds) =>
        eds.map((edge) => {
          if (!edge.data?.isCrossChain) return edge; // Leave normal edges alone

          // Show edge if connected to selected OR hovered node
          const isConnectedToSelected =
            selectedId && (edge.source === selectedId || edge.target === selectedId);
          const isConnectedToHovered =
            hoveredId && (edge.source === hoveredId || edge.target === hoveredId);

          if (isConnectedToSelected || isConnectedToHovered) {
            return { ...edge, hidden: false, animated: true };
          }
          return { ...edge, hidden: true, animated: false };
        })
      );
    },
    [setEdges]
  );

  // When hovering a node, reveal its specific hidden connections
  const onNodeMouseEnter = useCallback(
    (_, node) => {
      setHoveredNodeId(node.id);
      updateEdgeVisibility(selectedNodeId, node.id);
    },
    [selectedNodeId, updateEdgeVisibility]
  );

  // Reset hover state when leaving
  const onNodeMouseLeave = useCallback(() => {
    setHoveredNodeId(null);
    updateEdgeVisibility(selectedNodeId, null);
  }, [selectedNodeId, updateEdgeVisibility]);

  // When clicking a node, keep its edges visible
  const onNodeClick = useCallback(
    (_, node) => {
      setSelectedNodeId(node.id);
      updateEdgeVisibility(node.id, hoveredNodeId);
    },
    [hoveredNodeId, updateEdgeVisibility]
  );

  // When clicking empty space (pane), deselect and hide edges
  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
    updateEdgeVisibility(null, hoveredNodeId);
  }, [hoveredNodeId, updateEdgeVisibility]);

  // Track viewport changes to sync sidebar
  const onMove = useCallback((event, vp) => {
    setViewport(vp);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
        display: "flex",
      }}
    >
      {/* Sidebar Labels (The Swimlane Headers) */}
      <div className="sidebar" style={{ width: SIDEBAR_WIDTH }}>
        <div
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          {laneLabels.map((label) => (
            <div
              key={label.name}
              className="lane-label"
              style={{
                top: label.y * viewport.zoom + viewport.y,
                height: ROW_HEIGHT * viewport.zoom,
              }}
            >
              {label.name}
            </div>
          ))}
        </div>
      </div>

      {/* The Graph */}
      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          onMove={onMove}
          minZoom={0.2}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
          nodesDraggable={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#222" gap={40} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
