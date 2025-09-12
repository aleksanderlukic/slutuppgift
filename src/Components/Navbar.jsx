// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar({ cartItems }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Drone Delights</h1>
      </div>

      <div className="navbar-center">
        <a href="/">Hem</a>
        <a href="/menu">Meny</a>
        <a href="/about">Om oss</a>
      </div>

      <div className="navbar-right">
        <button className="cart-btn">🛒 Varukorg ({cartItems.length})</button>
      </div>
    </nav>
  );
}
