// src/pages/CheckoutPage/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const CheckoutPage = ({ cartItems }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("kort");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  return (
    <div className="checkout-container">
      <h1>Kassa</h1>

      <h2>Orderöversikt</h2>
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

      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Leveransinformation</h2>
        <input type="text" placeholder="Fullständigt namn" required />
        <input type="text" placeholder="Gatuadress" required />
        <input type="text" placeholder="Lägenhet/våning" />
        <input type="text" placeholder="Stad" required />
        <input type="text" placeholder="Postnummer" required />
        <input type="tel" placeholder="Telefonnummer" required />
        <textarea placeholder="Leveransinstruktioner"></textarea>

        <h2>Betalning</h2>
        <label>
          <input
            type="radio"
            value="kort"
            checked={paymentMethod === "kort"}
            onChange={() => setPaymentMethod("kort")}
          />{" "}
          Kort
        </label>
        <label>
          <input
            type="radio"
            value="swish"
            checked={paymentMethod === "swish"}
            onChange={() => setPaymentMethod("swish")}
          />{" "}
          Swish
        </label>

        {paymentMethod === "kort" && (
          <>
            <input type="text" placeholder="Kortnummer" required />
            <input type="text" placeholder="Utgångsdatum" required />
            <input type="text" placeholder="CVV" required />
          </>
        )}

        {paymentMethod === "swish" && (
          <input type="tel" placeholder="Swish-telefonnummer" required />
        )}

        <button type="submit">Lägg till beställning</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
