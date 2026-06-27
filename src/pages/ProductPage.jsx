import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";
import { useCart } from "../context/CartContext";
import { productBenefits, products } from "../data/products";
import { expandedDescription, formatPrice, iconForCategory, renderStars } from "../utils/format";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="section product-page">
        <button type="button" className="back-button" onClick={() => navigate("/")}>
          Back to Products
        </button>
        <div className="not-found-card">
          <h2>Product not found</h2>
          <p>The item you were looking for is not available right now.</p>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const reviewCount = 100 + product.id * 23;
  const benefits = productBenefits[product.category] ?? productBenefits.Kitchen;

  return (
    <>
      <main className="section product-page">
        <button type="button" className="back-button" onClick={() => navigate("/")}>
          Back to Products
        </button>

        <section className="product-layout">
          <div className="detail-visual" style={{ background: product.color }}>
            {product.tag ? <span className={`tag ${product.tag === "Sale" ? "sale" : ""}`}>{product.tag}</span> : null}
            <div className="detail-watermark">RR26</div>
            <div className="detail-icon">{iconForCategory(product.category)}</div>
          </div>

          <div className="detail-copy">
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="rating-row">
              <span>{renderStars(product.rating)}</span>
              <span>{product.rating.toFixed(1)} rating</span>
              <span>{reviewCount} reviews</span>
            </div>
            <div className="detail-price">{formatPrice(product.price)}</div>
            <p className="detail-description">{expandedDescription(product)}</p>

            <div className="quantity-row" aria-label="Quantity selector">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)}>
                +
              </button>
            </div>

            <button
              type="button"
              className="primary-button full-width"
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: { id: product.id, name: product.name, price: product.price, qty: quantity },
                })
              }
            >
              Add to Cart
            </button>

            <button type="button" className="wishlist-link">
              Add to Wishlist
            </button>
          </div>
        </section>

        <section className="benefits-panel">
          <div className="section-heading compact">
            <span className="eyebrow">Why it works</span>
            <h2>Key Benefits</h2>
          </div>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        <RelatedProducts items={relatedProducts} />
      </main>
      <Footer />
    </>
  );
}
