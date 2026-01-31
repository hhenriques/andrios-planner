/**
 * FILE: CustomNode.js
 * The "Card" component that renders the actual upgrade.
 */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "8px",
        background: "#2B2B2B",
        border: "1px solid #555",
        width: "240px",
        color: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        position: "relative",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      {/* Inputs handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#777", width: "8px", height: "8px" }}
      />

      <div
        style={{
          borderBottom: "1px solid #444",
          paddingBottom: "8px",
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "13px" }}>{data.label}</strong>
        <span
          style={{
            fontSize: "11px",
            background: "#ffcd3c",
            color: "black",
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {data.cost} pp
        </span>
      </div>

      <div style={{ fontSize: "12px", color: "#ccc" }}>
        {data.income !== "—" && (
          <div
            style={{
              marginBottom: "6px",
              color: "#81c784",
              fontWeight: "bold",
            }}
          >
            Income: {data.income}
          </div>
        )}
        <div style={{ fontSize: "11px", lineHeight: "1.4", color: "#aaa" }}>
          {data.rewards}
        </div>
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#777", width: "8px", height: "8px" }}
      />
    </div>
  );
};

export default memo(CustomNode);
