import React from "react";
import { Link } from "react-router-dom";
import { formatPrice, iconForCategory, renderStars } from "../utils/format";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image" style={{ background: product.color }}>
        {product.tag ? <span className={`tag ${product.tag === "Sale" ? "sale" : ""}`}>{product.tag}</span> : null}
        <ProductVisual color={product.color} label={iconForCategory(product.category)} compact />
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <strong>{formatPrice(product.price)}</strong>
          <span>{renderStars(product.rating)}</span>
        </div>
        <Link className="secondary-button" to={`/product/${product.id}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}
