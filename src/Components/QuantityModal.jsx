import React, { useState } from "react";
import "./QuantityModal.css";

const QuantityModal = ({ dish, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{dish.name}</h2>
        <img
          src={`/images/${dish.image}`}
          alt={dish.name}
          className="modal-img"
        />
        <p>{dish.description}</p>
        <p>Pris per styck: {dish.price} kr</p>

        <div className="quantity-controls">
          <button onClick={decrease}>-</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Avbryt
          </button>
          <button
            className="confirm-btn"
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
