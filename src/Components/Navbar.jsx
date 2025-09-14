// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartItems = [] }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Hem</Link>
        <Link to="/menu">Meny</Link>
        <Link to="/om-oss">Om oss</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          🛒 {cartItems.length}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
