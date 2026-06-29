import React from "react";
import { Link } from "react-router-dom";
import { iconForCategory } from "../utils/format";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image" style={{ background: product.color }}>
        <ProductVisual color={product.color} label={iconForCategory(product.category)} compact />
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <div className="product-subtitle">{product.product}</div>
        <p>{product.description}</p>
        <div className="chip-row">
          {product.fragrances.map((fragrance) => (
            <span key={fragrance} className="selection-chip">
              {fragrance}
            </span>
          ))}
        </div>
        <Link className="secondary-button" to={`/product/${product.id}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}

