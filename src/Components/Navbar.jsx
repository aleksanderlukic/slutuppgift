// src/Components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.png"; // 👈 rätt sökväg

const Navbar = ({ cartItems = [] }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cartItems.length;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* ✅ Vänster: logga + namn */}
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Drone Delights Logo" className="logo" />
        <span className="brand-name">Drone Delights</span>
      </Link>

      {/* ✅ Höger: länkar + kundvagn */}
      <div className="nav-right">
        <NavLink to="/" end>
          Hem
        </NavLink>
        <NavLink to="/menu">Meny</NavLink>
        <NavLink to="/om-oss">Om oss</NavLink>
        <NavLink to="/cart" className="cart-link">
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
