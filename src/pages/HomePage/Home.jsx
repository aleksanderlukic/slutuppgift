// src/pages/HomePage/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import "./Home.css";

export default function Home() {
  const [popularDishes, setPopularDishes] = useState([]);

  // Hämta populära rätter från db.json
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((dish) => dish.popular);
        setPopularDishes(popular);
      })
      .catch((err) => console.error("Error fetching popular dishes:", err));
  }, []);

  return (
    <div className="home-page">
      <h1 className="hero-title">Drone Delights</h1>
      <p className="hero-subtitle">Hett, gott och levererat blixtsnabbt.</p>

      <div className="home-buttons">
        <Link to="/menu">
          <button className="menu-btn">Visa Meny</button>
        </Link>
        <Link to="/om-oss">
          <button className="menu-btn">Om oss</button>
        </Link>
      </div>

      <h2 className="popular-title">Populäraste Rätterna</h2>

      <div className="card-container">
        {popularDishes.map((dish) => (
          <Card
            key={dish.id}
            id={dish.id}
            imgSrc={`/images/${dish.image}`}
            title={dish.name}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
}
