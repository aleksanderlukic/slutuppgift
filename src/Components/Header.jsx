// File: src/Components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">Drone Delights</h2>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/menu">Meny</Link>
          </li>
          <li>
            <Link to="/om-oss">Om oss</Link>
          </li>{" "}
          {/* Här går du till OmOssPage */}
          <li>
            <Link to="/cart">Kundvagn</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
