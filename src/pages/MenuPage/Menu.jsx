// src/pages/MenuPage/Menu.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CardContext"; // 👈 hämta addToCart här
import "./Menu.css";

const sampleMenu = [
  {
    id: 1,
    name: "Crispy chicken bites",
    category: "Förrätter",
    price: 39,
    img: "/images/crispy-chicken.png",
  },
  {
    id: 2,
    name: "Thin Crust Pizza",
    category: "Huvudrätter",
    price: 95,
    img: "/images/pizza.png",
  },
  {
    id: 3,
    name: "Roasted veggie medley",
    category: "Huvudrätter",
    price: 55,
    img: "/images/vegetables-chroma.png",
  },
  {
    id: 4,
    name: "Coca Cola",
    category: "Drycker",
    price: 25,
    img: "/images/coke.png",
  },
  {
    id: 5,
    name: "Chokladmousse",
    category: "Desserter",
    price: 45,
    img: "/images/chocolate-mousse.png",
  },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart(); // 👈 fixar felet

  const categories = [
    "Alla",
    "Förrätter",
    "Huvudrätter",
    "Drycker",
    "Desserter",
  ];

  const filteredMenu = sampleMenu.filter(
    (item) =>
      (selectedCategory === "Alla" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-container">
      <h1 className="menu-title">Meny</h1>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Sök maträtt..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="menu-search"
        />

        <select
          className="menu-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>{item.price} kr</p>
            <button className="menu-btn" onClick={() => addToCart(item, 1)}>
              Lägg till i kundvagn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
