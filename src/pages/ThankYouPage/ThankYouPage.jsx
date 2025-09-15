// src/pages/ThankYouPage/ThankYouPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <h1>Tack för ditt köp!</h1>
      <h2>Din beställning är på väg 🚀</h2>
      <button onClick={() => navigate("/")}>Gå tillbaka till startsidan</button>
    </div>
  );
};

export default ThankYouPage;
