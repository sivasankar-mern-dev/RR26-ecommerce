import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark">RR26</span>
        <span className="brand-tagline">Home Cleaning Co.</span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        <NavLink to="/">Home</NavLink>
        <a href="/#products" onClick={(event) => scrollToSection(event, "products")}>
          Products
        </a>
        <a href="/#about" onClick={(event) => scrollToSection(event, "about")}>
          About
        </a>
        <a href="/#contact" onClick={(event) => scrollToSection(event, "contact")}>
          Contact
        </a>
      </nav>

      <Link
        className="cart-button"
        aria-label={`Cart with ${itemCount} items`}
        to="/cart"
      >
        <span className="cart-icon">Cart</span>
        <span className="cart-badge">{itemCount}</span>
      </Link>
    </header>
  );
}
