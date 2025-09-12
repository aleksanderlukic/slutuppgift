import React, { useState } from "react";
import "./Card.css";

export default function Card({ imgSrc, title, description }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button
        className={`card-btn ${added ? "added" : ""}`}
        onClick={handleAdd}
      >
        {added ? "Tillagd!" : "Beställ nu"}
      </button>
    </div>
  );
}
