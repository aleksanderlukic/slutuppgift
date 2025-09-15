// src/Components/Card.jsx
import React, { useState } from "react";
import "./Card.css";
import { useCart } from "../context/CardContext";

export default function Card({ id, imgSrc, title, description, price }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    // alltid samma format för image
    const cleanImage = imgSrc.includes("/images/")
      ? imgSrc.replace("/images/", "")
      : imgSrc;

    addToCart(
      {
        id,
        name: title,
        price,
        image: cleanImage, // ✅ alltid bara filnamn
        description,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">{price} kr</p>
      <button
        className={`card-btn ${added ? "added" : ""}`}
        onClick={handleAdd}
      >
        {added ? "Tillagd!" : "Beställ nu"}
      </button>
    </div>
  );
}
