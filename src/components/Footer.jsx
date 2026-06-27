import React from "react";
import { Link } from "react-router-dom";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function Footer() {
  const scrollToSection = useSectionNavigation();

  return (
    <footer className="footer" id="contact">
      <div>
        <div className="footer-brand">RR26</div>
        <p>Clean Smarter. Live Better.</p>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <a href="/#products" onClick={(event) => scrollToSection(event, "products")}>
          Products
        </a>
        <a href="/#about" onClick={(event) => scrollToSection(event, "about")}>
          About
        </a>
        <a href="/#contact" onClick={(event) => scrollToSection(event, "contact")}>
          Contact
        </a>
      </div>
      <div className="footer-copy">© 2026 RR26</div>
    </footer>
  );
}
