// src/pages/ThankYouPage/ThankYouPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css";

const ThankYouPage = ({ cartItems }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="thankyou-container">
      <h1>Tack för ditt köp!</h1>
      <h2>Orderdetaljer</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = {item.price * item.quantity} kr
          </li>
        ))}
      </ul>
      <p>
        <strong>Totalt: {totalPrice} kr</strong>
      </p>

      <button onClick={() => navigate("/")}>Gå tillbaka till startsidan</button>
    </div>
  );
};

export default ThankYouPage;
