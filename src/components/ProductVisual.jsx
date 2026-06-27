import React from "react";

export default function ProductVisual({ color, label, compact = false }) {
  return (
    <div className={`product-visual-shell ${compact ? "compact" : ""}`}>
      <div className="product-bottle-shadow" />
      <div className="product-bottle" style={{ background: `linear-gradient(180deg, ${color}, #ffffff)` }}>
        <div className="product-bottle-cap" />
        <div className="product-bottle-label">
          <span>RR26</span>
          <small>{label}</small>
        </div>
      </div>
    </div>
  );
}
