import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rr26-logo.png";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function Footer() {
  const scrollToSection = useSectionNavigation();

  return (
    <footer className="footer" id="contact">
      <div className="footer-brand-block">
        <img className="footer-logo" src={logo} alt="RR26 logo" />
        <div>
          <div className="footer-brand">RR26</div>
          <p>Clean Smarter. Live Better.</p>
        </div>
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
