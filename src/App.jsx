/**
 * FILE: App.js
 * The main graph engine.
 */
import React, { useState, useCallback } from "react";
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
  const [nodes, , onNodesChange] = useNodesState(centeredNodes);
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 0.5 });

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

  // When hovering a node, reveal its specific hidden connections
  const onNodeMouseEnter = useCallback(
    (_, node) => {
      setEdges((eds) =>
        eds.map((edge) => {
          if (!edge.data?.isCrossChain) return edge; // Leave normal edges alone

          // If this edge is connected to the hovered node, SHOW IT
          if (edge.source === node.id || edge.target === node.id) {
            return { ...edge, hidden: false, animated: true };
          }
          return edge;
        })
      );
    },
    [setEdges]
  );

  // Reset when leaving
  const onNodeMouseLeave = useCallback(() => {
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        hidden: edge.data?.isCrossChain || false,
        animated: edge.data?.isCrossChain ? false : edge.animated,
      }))
    );
  }, [setEdges]);

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
