import React from "react";

const features = [
  { icon: "Leaf", title: "Plant-Based Formula" },
  { icon: "Drop", title: "Streak-Free Results" },
  { icon: "Loop", title: "Eco Packaging" },
];

export default function FeatureBar() {
  return (
    <section className="feature-section">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <span className="feature-icon">{feature.icon}</span>
          <span>{feature.title}</span>
        </article>
      ))}
    </section>
  );
}
