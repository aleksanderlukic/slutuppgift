// src/pages/CartPage/Cart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CardContext";
import "./Cart.css";

const CartPage = () => {
  const { cart, increment, decrement, removeItem, emptyCart, totalPrice } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-title">I Kundvagnen</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Din kundvagn är tom</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">{item.price} kr</p>
                </div>
                <div className="cart-item-controls">
                  <button
                    className="control-btn"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    className="control-btn"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <p className="total-label">Totalt:</p>
            <p className="total-price">{totalPrice} kr</p>
          </div>

          <button className="empty-cart-btn" onClick={emptyCart}>
            Töm kundvagn
          </button>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Fortsätt till kassan
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
