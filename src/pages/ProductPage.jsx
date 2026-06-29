import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ProductVisual from "../components/ProductVisual";
import RelatedProducts from "../components/RelatedProducts";
import WhyChooseSection from "../components/WhyChooseSection";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { expandedDescription, formatPrice, iconForCategory } from "../utils/format";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size[0] ?? null);
  const [selectedFragrance, setSelectedFragrance] = useState(product?.fragrances[0] ?? "");

  useEffect(() => {
    if (!product) {
      return;
    }

    setQuantity(1);
    setSelectedSize(product.size[0] ?? null);
    setSelectedFragrance(product.fragrances[0] ?? "");
  }, [product]);

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
  const activeSize = selectedSize ?? product.size[0];

  return (
    <>
      <main className="section product-page">
        <button type="button" className="back-button" onClick={() => navigate("/")}>
          Back to Products
        </button>

        <section className="product-layout">
          <div className="detail-visual" style={{ background: product.color }}>
            <div className="detail-watermark">RR26</div>
            <ProductVisual color={product.color} label={iconForCategory(product.category)} />
          </div>

          <div className="detail-copy">
            <span className="product-category">{product.category}</span>
            <h1>{product.title}</h1>
            <div className="detail-product-name">{product.product}</div>
            <div className="detail-price">{formatPrice(activeSize.price)}</div>
            <div className="option-group">
              <div className="option-label">Size</div>
              <div className="chip-row">
                {product.size.map((variant) => (
                  <button
                    key={variant.volume}
                    type="button"
                    className={`selection-chip selectable-chip ${
                      activeSize.volume === variant.volume ? "active-chip" : ""
                    }`}
                    onClick={() => setSelectedSize(variant)}
                  >
                    {variant.volume} {formatPrice(variant.price)}
                  </button>
                ))}
              </div>
            </div>
            <div className="option-group">
              <div className="option-label">Fragrance</div>
              <div className="chip-row">
                {product.fragrances.map((fragrance) => (
                  <button
                    key={fragrance}
                    type="button"
                    className={`selection-chip selectable-chip ${
                      selectedFragrance === fragrance ? "active-chip" : ""
                    }`}
                    onClick={() => setSelectedFragrance(fragrance)}
                  >
                    {fragrance}
                  </button>
                ))}
              </div>
            </div>
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
                  payload: {
                    id: product.id,
                    name: product.product,
                    price: activeSize.price,
                    qty: quantity,
                    volume: activeSize.volume,
                    fragrance: selectedFragrance,
                  },
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
            {product.keyFeatures.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        <WhyChooseSection compact />

        <RelatedProducts items={relatedProducts} />
      </main>
      <Footer />
    </>
  );
}

