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

// Build reverse dependency map: for each node, find which nodes it unlocks
const buildUnlocksMap = () => {
  const unlocksMap = new Map();
  
  // Initialize all nodes with empty arrays
  initialData.nodes.forEach((node) => {
    unlocksMap.set(node.id, []);
  });
  
  // For each edge, the source node unlocks the target node
  initialData.edges.forEach((edge) => {
    const unlocks = unlocksMap.get(edge.source) || [];
    unlocks.push(edge.target);
    unlocksMap.set(edge.source, unlocks);
  });
  
  return unlocksMap;
};

const unlocksMap = buildUnlocksMap();

// Helper to get node label by id
const getNodeLabel = (nodeId) => {
  const node = initialData.nodes.find((n) => n.id === nodeId);
  return node ? node.data.label : nodeId;
};

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

// Base town income
const BASE_INCOME = 150;

// Process nodes to center them vertically in their lanes
const centeredNodes = initialData.nodes.map((node) => ({
  ...node,
  position: {
    ...node.position,
    y: node.position.y + VERTICAL_OFFSET,
  },
}));

// Colors for dependency visualization
const DEPENDENCY_COLOR = "#3b82f6"; // Blue - nodes this depends on
const DEPENDANT_COLOR = "#f59e0b";  // Orange - nodes that depend on this

function Flow() {
  // Initialize purchased nodes from localStorage
  const [purchasedNodes, setPurchasedNodes] = useState(() => loadPurchasedNodes());
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 0.5 });
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  
  // Track which nodes are highlighted as dependencies/dependants
  const [highlightedNodes, setHighlightedNodes] = useState({
    dependencies: new Set(), // Nodes the active node depends on
    dependants: new Set(),   // Nodes that depend on the active node
  });
  
  // Toggle for showing the help/legend panel
  const [showLegend, setShowLegend] = useState(false);
  
  // Toggle for showing the reset confirmation modal
  const [showResetModal, setShowResetModal] = useState(false);

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
          // Highlighting state for dependency visualization
          isDependencyHighlighted: highlightedNodes.dependencies.has(node.id),
          isDependantHighlighted: highlightedNodes.dependants.has(node.id),
        },
      })),
    [purchasedNodes, togglePurchased, highlightedNodes]
  );

  // Calculate total town income based on purchased nodes
  const incomeData = React.useMemo(() => {
    let totalBonus = 0;
    
    purchasedNodes.forEach((nodeId) => {
      const node = initialData.nodes.find((n) => n.id === nodeId);
      if (node && node.data.income && node.data.income !== "—") {
        // Parse the income string (e.g., "+10%" -> 10)
        const match = node.data.income.match(/\+(\d+)%/);
        if (match) {
          totalBonus += parseInt(match[1], 10);
        }
      }
    });
    
    const currentIncome = Math.round(BASE_INCOME * (1 + totalBonus / 100));
    
    return {
      base: BASE_INCOME,
      bonus: totalBonus,
      current: currentIncome,
    };
  }, [purchasedNodes]);

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

  // Helper to update edge visibility and node highlighting based on selected and hovered nodes
  const updateEdgeVisibility = useCallback(
    (selectedId, hoveredId) => {
      const activeNodeId = hoveredId || selectedId;
      
      // Track dependencies and dependants for node highlighting
      const dependencies = new Set();
      const dependants = new Set();
      
      setEdges((eds) =>
        eds.map((edge) => {
          if (!edge.data?.isCrossChain) return edge; // Leave normal edges alone

          // Show edge if connected to selected OR hovered node
          const isConnectedToSelected =
            selectedId && (edge.source === selectedId || edge.target === selectedId);
          const isConnectedToHovered =
            hoveredId && (edge.source === hoveredId || edge.target === hoveredId);

          if (isConnectedToSelected || isConnectedToHovered) {
            // Determine direction relative to the active node
            const isDependency = edge.target === activeNodeId; // Active node depends on source
            const isDependant = edge.source === activeNodeId;  // Target depends on active node
            
            // Track for node highlighting
            if (isDependency) dependencies.add(edge.source);
            if (isDependant) dependants.add(edge.target);
            
            // Color and style based on direction
            const edgeColor = isDependency ? DEPENDENCY_COLOR : DEPENDANT_COLOR;
            
            return {
              ...edge,
              hidden: false,
              animated: true,
              className: isDependency ? "dependency-edge" : "dependant-edge",
              style: {
                stroke: edgeColor,
                strokeWidth: 3,
                strokeDasharray: "5,5",
              },
              markerEnd: undefined,
            };
          }
          return { ...edge, hidden: true, animated: false };
        })
      );
      
      // Update highlighted nodes state
      setHighlightedNodes({ dependencies, dependants });
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
    // If no node is selected, clear highlighting
    if (!selectedNodeId) {
      setHighlightedNodes({ dependencies: new Set(), dependants: new Set() });
    }
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
    setHighlightedNodes({ dependencies: new Set(), dependants: new Set() });
    updateEdgeVisibility(null, hoveredNodeId);
  }, [hoveredNodeId, updateEdgeVisibility]);

  // Track viewport changes to sync sidebar
  const onMove = useCallback((event, vp) => {
    setViewport(vp);
  }, []);

  // Show reset confirmation modal
  const handleResetClick = () => {
    setShowResetModal(true);
  };

  // Confirm reset - actually clear purchases
  const confirmReset = () => {
    setPurchasedNodes(new Set());
    setShowResetModal(false);
  };

  // Cancel reset
  const cancelReset = () => {
    setShowResetModal(false);
  };

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

        {/* Income Info Box */}
        <div className="income-box">
          <div className="income-label">Town Income</div>
          <div className="income-value">{incomeData.current} pp/week</div>
          {incomeData.bonus > 0 && (
            <div className="income-bonus">+{incomeData.bonus}% from upgrades</div>
          )}
        </div>

        {/* Top right button group */}
        <div className="top-button-group">
          <button
            onClick={handleResetClick}
            className="toolbar-button reset-button"
            title="Reset all purchases"
          >
            🗑
          </button>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className={`toolbar-button help-button ${showLegend ? "active" : ""}`}
            title="Show legend"
          >
            ?
          </button>
        </div>
        
        {showLegend && (
          <div className="dependency-legend">
            <h4>Dependencies</h4>
            <div className="legend-item">
              <div className="legend-color dependency"></div>
              <span>Requires (depends on)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color dependant"></div>
              <span>Unlocks (dependant)</span>
            </div>
            <p className="legend-hint">Hover or click a node to see its dependencies</p>
          </div>
        )}

        {/* Reset confirmation modal */}
        {showResetModal && (
          <div className="modal-overlay" onClick={cancelReset}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>Reset Progress</h3>
              <p>Are you sure you want to reset all purchases? This cannot be undone.</p>
              <div className="modal-buttons">
                <button className="modal-button cancel" onClick={cancelReset}>
                  Cancel
                </button>
                <button className="modal-button confirm" onClick={confirmReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Detail Panel */}
      {selectedNodeId && (() => {
        const selectedNode = initialData.nodes.find((n) => n.id === selectedNodeId);
        if (!selectedNode) return null;
        
        const nodeData = selectedNode.data;
        const dependencies = dependencyMap.get(selectedNodeId) || [];
        const unlocks = unlocksMap.get(selectedNodeId) || [];
        const isPurchased = purchasedNodes.has(selectedNodeId);
        const canBuy = canPurchaseNode(selectedNodeId, purchasedNodes);
        
        return (
          <div className="detail-panel">
            <button 
              className="detail-panel-close" 
              onClick={() => setSelectedNodeId(null)}
              title="Close panel"
            >
              ×
            </button>
            
            <div className="detail-panel-header">
              <h2>{nodeData.label}</h2>
              <span className="detail-building">{nodeData.building}</span>
            </div>
            
            <div className="detail-panel-status">
              {isPurchased ? (
                <span className="status-badge purchased">Purchased</span>
              ) : canBuy ? (
                <span className="status-badge available">Available</span>
              ) : (
                <span className="status-badge locked">Locked</span>
              )}
            </div>
            
            <div className="detail-panel-section">
              <div className="detail-row">
                <span className="detail-label">Cost</span>
                <span className="detail-value cost">{nodeData.cost} pp</span>
              </div>
              {nodeData.income !== "—" && (
                <div className="detail-row">
                  <span className="detail-label">Income</span>
                  <span className="detail-value income">{nodeData.income}</span>
                </div>
              )}
            </div>
            
            <div className="detail-panel-section">
              <h4>Rewards</h4>
              <p className="detail-rewards">{nodeData.rewards}</p>
            </div>
            
            <div className="detail-panel-section flavor">
              <p className="detail-flavor">"{nodeData.flavor}"</p>
            </div>
            
            {dependencies.length > 0 && (
              <div className="detail-panel-section">
                <h4>
                  <span className="dependency-icon">●</span>
                  Requires
                </h4>
                <ul className="detail-list dependencies">
                  {dependencies.map((depId) => (
                    <li key={depId} className={purchasedNodes.has(depId) ? "satisfied" : ""}>
                      {purchasedNodes.has(depId) && <span className="check">✓</span>}
                      {getNodeLabel(depId)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {unlocks.length > 0 && (
              <div className="detail-panel-section">
                <h4>
                  <span className="unlocks-icon">●</span>
                  Unlocks
                </h4>
                <ul className="detail-list unlocks">
                  {unlocks.map((unlockId) => (
                    <li key={unlockId} className={purchasedNodes.has(unlockId) ? "satisfied" : ""}>
                      {purchasedNodes.has(unlockId) && <span className="check">✓</span>}
                      {getNodeLabel(unlockId)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })()}
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
