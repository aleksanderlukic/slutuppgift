import React, { useState } from "react";
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    name: "Crispy chicken bites",
    price: 39,
    quantity: 1,
    img: "/images/crispy-chicken.png",
  },
  {
    id: 2,
    name: "Thin Crust Pizza",
    price: 95,
    quantity: 1,
    img: "/images/pizza.png",
  },
  {
    id: 3,
    name: "Roasted veggie medley",
    price: 55,
    quantity: 1,
    img: "/images/vegetables-chroma.png",
  },
];

const Cart = ({ cartItemsProp = [] }) => {
  const [cartItems, setCartItems] = useState(
    cartItemsProp.length > 0 ? cartItemsProp : initialCart
  );

  const increment = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">I Kundvagnen</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Din kundvagn är tom</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="cart-item"
              style={{ top: `${245 + index * 157}px` }}
            >
              <img src={item.img} alt={item.name} className="cart-item-img" />
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

          <div className="cart-footer">
            <p className="total-label">Totalt:</p>
            <p className="total-price">{totalPrice} kr</p>
          </div>

          <button className="empty-cart-btn" onClick={emptyCart}>
            Töm kundvagn
          </button>
          <button className="checkout-btn">Fortsätt till kassan</button>
        </>
      )}
    </div>
  );
};

export default Cart;
