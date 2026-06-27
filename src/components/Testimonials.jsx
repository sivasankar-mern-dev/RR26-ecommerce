import React from "react";

import { testimonials } from "../data/products";

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="about">
      <div className="section-heading compact">
        <span className="eyebrow">Loved by households</span>
        <h2>What Customers Say</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"{testimonial.quote}"</p>
            <strong>{testimonial.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
