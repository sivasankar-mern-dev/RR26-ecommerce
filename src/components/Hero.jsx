import React from "react";

import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function Hero() {
  const scrollToSection = useSectionNavigation();

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Premium plant-powered essentials</span>
        <h1>A Cleaner Home, Naturally.</h1>
        <p>
          Plant-based formulas that cut grease, neutralize odors, and leave everything spotless.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={() => scrollToSection(null, "products")}>
            Shop Now
          </button>
          <span className="hero-note">Trusted for kitchens, floors, glass, and everyday messes.</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="bubble bubble-one" />
        <div className="bubble bubble-two" />
        <div className="bubble bubble-three" />
        <div className="mockup-card">
          <div className="bottle bottle-large" />
          <div className="bottle bottle-medium" />
          <div className="surface-glow" />
          <div className="mockup-badge">RR26 Fresh Formula</div>
        </div>
      </div>
    </section>
  );
}
