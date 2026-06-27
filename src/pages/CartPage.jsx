import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProductVisual from "../components/ProductVisual";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { formatPrice, iconForCategory } from "../utils/format";

export default function CartPage() {
  const { state, dispatch, subtotal, itemCount } = useCart();

  const cartItems = state.items.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return {
      ...item,
      category: product?.category ?? "Cleaning",
      color: product?.color ?? "#E8F4F0",
    };
  });

  return (
    <>
      <main className="section cart-page">
        <div className="section-heading compact">
          <span className="eyebrow">Your basket</span>
          <h1>Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div>
              <h2>Your cart is empty</h2>
              <p>Add a few RR26 essentials and they will show up here for review before checkout.</p>
            </div>
            <Link className="primary-button" to="/#products">
              Browse Products
            </Link>
          </section>
        ) : (
          <section className="cart-layout">
            <div className="cart-list">
              {cartItems.map((item) => (
                <article key={item.id} className="cart-item">
                  <div className="cart-item-visual" style={{ background: item.color }}>
                    <ProductVisual color={item.color} label={iconForCategory(item.category)} compact />
                  </div>

                  <div className="cart-item-copy">
                    <span className="product-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)} each</p>
                    <button
                      type="button"
                      className="wishlist-link"
                      onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-row" aria-label={`Quantity for ${item.name}`}>
                      <button
                        type="button"
                        onClick={() =>
                          item.qty === 1
                            ? dispatch({ type: "REMOVE_ITEM", payload: item.id })
                            : dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: item.qty - 1 } })
                        }
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty: item.qty + 1 } })
                        }
                      >
                        +
                      </button>
                    </div>
                    <strong>{formatPrice(item.price * item.qty)}</strong>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping, taxes, and delivery estimates are calculated at checkout.</p>
              <div className="summary-actions">
                <button type="button" className="primary-button full-width">
                  Proceed to Checkout
                </button>
                <Link className="secondary-button full-width" to="/#products">
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
