import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <a href="/" className="nav-link">
          Visa Meny
        </a>
        <a href="/about" className="nav-link">
          Om oss
        </a>
        <a href="/cart" className="nav-link cart-link">
          Varukorg
        </a>
      </nav>
    </header>
  );
}
