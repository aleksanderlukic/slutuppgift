import React, { useState } from "react";
import "./Button.css";

export default function Button({ text, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick(); // kör callback från Card
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <button
      className={`custom-btn ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {clicked ? "Tillagd!" : text}
    </button>
  );
}
