// src/pages/HomePage/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="hero-title">Drone Delights</h1>
      <p className="hero-subtitle">Hett, gott och levererat blixtsnabbt.</p>

      <div className="home-buttons">
        <Link to="/menu">
          <button className="menu-btn">Visa Meny</button>
        </Link>
        <Link to="/om-oss">
          <button className="omoss-btn">Om oss</button>
        </Link>
      </div>

      <h2 className="popular-title">Populäraste Rätterna</h2>

      <div className="card-container">
        <Card
          imgSrc="/images/chicken-wings.png"
          title="Chicken Wings"
          description="Krispiga kycklingvingar, perfekt kryddade."
        />
        <Card
          imgSrc="/images/coffee.png"
          title="Freshed Coffee"
          description="Doften av nybryggt kaffe med fyllig smak."
        />
        <Card
          imgSrc="/images/burger.png"
          title="Classic Burger"
          description="En saftig burgare med fräscha tillbehör."
        />
        <Card
          imgSrc="/images/asian-crisps.png"
          title="Asian Rice Crisp"
          description="Frasiga rischips med en touch av Asien."
        />
      </div>
    </div>
  );
}
