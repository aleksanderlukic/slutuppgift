import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      <h1 className="hero-title">Drone Delights</h1>
      <p className="hero-subtitle">Hett, gott och levererat blixtsnabbt.</p>

      {/* Navigationsknappar */}
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
          description="Krispiga och smakrika kycklingvingar, perfekt kryddade och tillagade för att smälta i munnen."
        />
        <Card
          imgSrc="/images/coffee.png"
          title="Freshed Coffee"
          description="Doften av nybryggt kaffe med fyllig smak, en klassiker som förgyller varje måltid."
        />
        <Card
          imgSrc="/images/burger.png"
          title="Classic Burger"
          description="En saftig burgare med noggrant utvalda råvaror, fräscha tillbehör och nygrillat bröd."
        />
        <Card
          imgSrc="/images/asian-crisps.png"
          title="Asian Rice Crisp"
          description="Lätta och frasiga rischips med en touch av Asien, ett krispigt tillbehör som alltid uppskattas."
        />
      </div>

      
    </div>
  );
}
