// src/pages/ThankYouPage/ThankYouPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Thankyou.css";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="thankyou-container">
        <h1>Ingen beställning hittades</h1>
        <button className="home-btn" onClick={() => navigate("/")}>
          Tillbaka till startsidan
        </button>
      </div>
    );
  }

  return (
    <div className="thankyou-container">
      <h1>Tack för ditt köp!</h1>
      <p>Din beställning är på väg 🚀</p>

      <h2>Orderöversikt</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = {item.price * item.quantity} kr
          </li>
        ))}
      </ul>
      <p>
        <strong>Totalt: {order.totalPrice} kr</strong>
      </p>

      <h2>Leveransinformation</h2>
      <p>{order.fullName}</p>
      <p>
        {order.streetAddress} {order.apartment}
      </p>
      <p>
        {order.postalCode} {order.city}
      </p>
      <p>Tel: {order.phone}</p>
      {order.deliveryNote && <p>Instruktioner: {order.deliveryNote}</p>}

      <h2>Betalningsmetod</h2>
      <p>
        {order.paymentMethod === "kort"
          ? `Kort (**** **** **** ${order.paymentDetails.cardNumber.slice(-4)})`
          : `Swish (${order.paymentDetails.swishPhone})`}
      </p>

      <button className="home-btn" onClick={() => navigate("/")}>
        Gå tillbaka till startsidan
      </button>
    </div>
  );
};

export default ThankYouPage;
