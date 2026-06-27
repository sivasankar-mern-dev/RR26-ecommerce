import React from "react";

import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="section">
      <div className="section-heading">
        <span className="eyebrow">Shop the line</span>
        <h2>Our Products</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
