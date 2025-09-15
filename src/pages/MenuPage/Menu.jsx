// src/pages/MenuPage/Menu.jsx
import React, { useEffect, useState } from "react";
import "./Menu.css";
import QuantityModal from "../../Components/QuantityModal";
import { useCart } from "../../context/CardContext";

const MenuPage = () => {
  const { addToCart } = useCart();
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [search, setSearch] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  const categories = [
    "Alla",
    "Förrätter",
    "Huvudrätter",
    "Drycker",
    "Desserter",
  ];

  const filteredMenu = menu.filter(
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
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="menu-img"
            />
            <h3>{item.name}</h3>
            <p>{item.price} kr</p>
            <button className="menu-btn" onClick={() => setSelectedDish(item)}>
              Lägg till i kundvagn
            </button>
          </div>
        ))}
      </div>

      {selectedDish && (
        <QuantityModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onConfirm={(dish, quantity) => addToCart(dish, quantity)}
        />
      )}
    </div>
  );
};

export default MenuPage;
