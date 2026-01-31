/**
 * FILE: CustomNode.js
 * The "Card" component that renders the actual upgrade.
 */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  const { purchased, onTogglePurchased } = data;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onTogglePurchased?.();
  };

  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "8px",
        background: purchased ? "#1a3a1a" : "#2B2B2B",
        border: purchased ? "2px solid #4caf50" : "1px solid #555",
        width: "240px",
        color: "white",
        boxShadow: purchased
          ? "0 4px 12px rgba(76, 175, 80, 0.3)"
          : "0 4px 6px rgba(0,0,0,0.3)",
        position: "relative",
        transition: "all 0.2s ease",
        cursor: "default",
        opacity: purchased ? 0.85 : 1,
      }}
    >
      {/* Inputs handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: purchased ? "#4caf50" : "#777",
          width: "8px",
          height: "8px",
        }}
      />

      <div
        style={{
          borderBottom: "1px solid #444",
          paddingBottom: "8px",
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Checkbox for purchased state */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={handleCheckboxClick}
        >
          <input
            type="checkbox"
            checked={purchased || false}
            onChange={() => {}}
            style={{
              width: "16px",
              height: "16px",
              cursor: "pointer",
              accentColor: "#4caf50",
            }}
          />
        </label>
        <strong
          style={{
            fontSize: "13px",
            flex: 1,
            textDecoration: purchased ? "line-through" : "none",
            opacity: purchased ? 0.7 : 1,
          }}
        >
          {data.label}
        </strong>
        <span
          style={{
            fontSize: "11px",
            background: purchased ? "#4caf50" : "#ffcd3c",
            color: purchased ? "white" : "black",
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textDecoration: purchased ? "line-through" : "none",
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

      {/* Purchased indicator */}
      {purchased && (
        <div
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "#4caf50",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ✓
        </div>
      )}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: purchased ? "#4caf50" : "#777",
          width: "8px",
          height: "8px",
        }}
      />
    </div>
  );
};

export default memo(CustomNode);
