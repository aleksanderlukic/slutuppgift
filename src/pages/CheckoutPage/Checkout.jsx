// src/pages/CheckoutPage/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CardContext";
import "./Checkout.css";

const CheckoutPage = () => {
  const { cart, totalPrice, emptyCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("kort");
  const [form, setForm] = useState({
    fullName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    deliveryNote: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    swishPhone: "",
  });

  const navigate = useNavigate();

  // Hantera inputfält
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      items: cart,
      totalPrice,
      fullName: form.fullName,
      streetAddress: form.streetAddress,
      apartment: form.apartment,
      city: form.city,
      postalCode: form.postalCode,
      phone: form.phone,
      deliveryNote: form.deliveryNote,
      paymentMethod,
      paymentDetails:
        paymentMethod === "kort"
          ? {
              cardNumber: form.cardNumber,
              expiry: form.expiry,
              cvv: form.cvv,
            }
          : { swishPhone: form.swishPhone },
    };

    emptyCart();
    navigate("/thankyou", { state: { order } });
  };

  return (
    <div className="checkout-container">
      <h1>Kassa</h1>

      <h2>Orderöversikt</h2>
      <ul>
        {cart.map((item) => (
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
        <input
          type="text"
          name="fullName"
          placeholder="Fullständigt namn"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="streetAddress"
          placeholder="Gatuadress"
          value={form.streetAddress}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apartment"
          placeholder="Lägenhet/våning"
          value={form.apartment}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Stad"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postnummer"
          value={form.postalCode}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefonnummer"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="deliveryNote"
          placeholder="Leveransinstruktioner"
          value={form.deliveryNote}
          onChange={handleChange}
        />

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
            <input
              type="text"
              name="cardNumber"
              placeholder="Kortnummer"
              value={form.cardNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="Utgångsdatum (MM/YY)"
              value={form.expiry}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleChange}
              required
            />
          </>
        )}

        {paymentMethod === "swish" && (
          <input
            type="tel"
            name="swishPhone"
            placeholder="Swish-telefonnummer"
            value={form.swishPhone}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="checkout-btn">
          Lägg till beställning
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
