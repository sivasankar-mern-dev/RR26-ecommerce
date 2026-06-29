import React from "react";

const reasons = [
  {
    icon: "01",
    title: "Premium Quality",
    description: "Premium quality cleaning solutions made to feel dependable in everyday use.",
  },
  {
    icon: "02",
    title: "Fresh Fragrance",
    description: "Pleasant long-lasting fragrances that leave rooms, fabrics, and surfaces feeling refreshed.",
  },
  {
    icon: "03",
    title: "Strong Performance",
    description: "Effective cleaning performance that tackles grease, stains, residue, and odors with ease.",
  },
  {
    icon: "04",
    title: "Easy To Use",
    description: "Easy-to-use liquid formulations that fit naturally into quick daily cleaning routines.",
  },
  {
    icon: "05",
    title: "Versatile Spaces",
    description: "Ideal for homes, offices, restaurants, and commercial spaces where reliable results matter.",
  },
];

export default function WhyChooseSection({ compact = false }) {
  return (
    <section className={`why-section ${compact ? "compact-why" : ""}`}>
      <div className="section-heading compact">
        <span className="eyebrow">Why choose RR26</span>
        <h2>Cleaning Solutions Built For Everyday Confidence</h2>
      </div>

      <div className={`why-grid ${compact ? "compact-grid" : ""}`}>
        {reasons.map((reason) => (
          <article key={reason.title} className="why-card">
            <div className="why-icon">{reason.icon}</div>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
