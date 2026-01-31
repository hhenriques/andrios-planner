/**
 * FILE: App.js
 * The main graph engine.
 */
import React, { useState, useCallback, useMemo } from "react";
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

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialData.nodes);
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
      <div className="sidebar">
        <div
          style={{
            position: "relative",
            transform: `translateY(${viewport.y}px) scale(${viewport.zoom})`,
            transformOrigin: "top left",
          }}
        >
          {laneLabels.map((label) => (
            <div
              key={label.name}
              className="lane-label"
              style={{
                top: label.y,
                height: ROW_HEIGHT,
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
