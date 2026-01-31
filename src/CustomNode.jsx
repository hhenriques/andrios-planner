/**
 * FILE: CustomNode.js
 * The "Card" component that renders the actual upgrade.
 */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

// Colors for dependency visualization (must match App.jsx)
const DEPENDENCY_COLOR = "#3b82f6"; // Blue - nodes this depends on
const DEPENDANT_COLOR = "#f59e0b";  // Orange - nodes that depend on this

const CustomNode = ({ data }) => {
  const { 
    purchased, 
    canPurchase, 
    onTogglePurchased,
    isDependencyHighlighted,
    isDependantHighlighted,
  } = data;
  
  // Node is locked if not purchased and dependencies aren't met
  const isLocked = !purchased && !canPurchase;
  
  // Determine highlight state
  const isHighlighted = isDependencyHighlighted || isDependantHighlighted;
  const highlightColor = isDependencyHighlighted ? DEPENDENCY_COLOR : DEPENDANT_COLOR;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    if (!isLocked) {
      onTogglePurchased?.();
    }
  };

  // Compute border style based on state priority: highlighted > purchased > locked > default
  const getBorderStyle = () => {
    if (isHighlighted) return `2px solid ${highlightColor}`;
    if (purchased) return "2px solid #4caf50";
    if (isLocked) return "1px solid #333";
    return "1px solid #555";
  };
  
  // Compute box shadow based on state
  const getBoxShadow = () => {
    if (isHighlighted) {
      return `0 0 20px ${highlightColor}80, 0 0 40px ${highlightColor}40`;
    }
    if (purchased) return "0 4px 12px rgba(76, 175, 80, 0.3)";
    return "0 4px 6px rgba(0,0,0,0.3)";
  };

  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "8px",
        background: purchased ? "#1a3a1a" : isLocked ? "#1a1a1a" : "#2B2B2B",
        border: getBorderStyle(),
        width: "240px",
        color: "white",
        boxShadow: getBoxShadow(),
        position: "relative",
        transition: "all 0.2s ease",
        cursor: isLocked ? "not-allowed" : "default",
        opacity: purchased ? 0.85 : isLocked ? 0.5 : 1,
      }}
    >
      {/* Inputs handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: purchased ? "#4caf50" : isLocked ? "#444" : "#777",
          width: "8px",
          height: "8px",
        }}
      />

      <div
        style={{
          borderBottom: isLocked ? "1px solid #333" : "1px solid #444",
          paddingBottom: "8px",
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Checkbox for purchased state (or lock icon if locked) */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            cursor: isLocked ? "not-allowed" : "pointer",
            flexShrink: 0,
          }}
          onClick={handleCheckboxClick}
          title={isLocked ? "Purchase required dependencies first" : ""}
        >
          {isLocked ? (
            <span
              style={{
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "#666",
              }}
            >
              🔒
            </span>
          ) : (
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
          )}
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
            background: purchased ? "#4caf50" : isLocked ? "#555" : "#ffcd3c",
            color: purchased ? "white" : isLocked ? "#888" : "black",
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
          background: purchased ? "#4caf50" : isLocked ? "#444" : "#777",
          width: "8px",
          height: "8px",
        }}
      />
    </div>
  );
};

export default memo(CustomNode);
