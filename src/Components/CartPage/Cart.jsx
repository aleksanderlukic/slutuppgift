// File: src/Components/CartPage/Cart.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="cart">
      <h2>Din varukorg</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.name} x{item.quantity || 1}
              </span>
              <span>{item.price * (item.quantity || 1)} kr</span>
            </div>
          ))}
          <p className="total">Totalt: {total} kr</p>
          <div className="cart-buttons">
            <button className="clear-btn" onClick={handleClearCart}>
              Töm kundvagn
            </button>
            <Link to="/payment">
              <button className="checkout-btn">Till betalning</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
