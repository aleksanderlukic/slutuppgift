// src/Components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CardContext";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">Drone Delights</span>
        </Link>
      </div>
      <div className="nav-right">
        <NavLink to="/" className="nav-link">
          Hem
        </NavLink>
        <NavLink to="/menu" className="nav-link">
          Meny
        </NavLink>
        <NavLink to="/om-oss" className="nav-link">
          Om oss
        </NavLink>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
