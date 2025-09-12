// src/components/QuantityModal.jsx
import React, { useState } from "react";

const QuantityModal = ({ dish, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{dish.name}</h2>
        <img src={dish.image} alt={dish.name} width="120" />
        <p>Pris: {dish.price} kr</p>
        <div className="quantity-controls">
          <button onClick={decrease}>-</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Avbryt</button>
          <button
            onClick={() => {
              onConfirm(dish, quantity);
              onClose();
            }}
          >
            Lägg till ({dish.price * quantity} kr)
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;
