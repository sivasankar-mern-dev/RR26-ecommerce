import React from "react";

import ProductCard from "./ProductCard";

export default function RelatedProducts({ items }) {
  return (
    <section className="section related-section">
      <div className="section-heading compact">
        <span className="eyebrow">Complete the routine</span>
        <h2>You Might Also Like</h2>
      </div>
      <div className="related-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
