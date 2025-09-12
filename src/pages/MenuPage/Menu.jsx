// File: src/Components/MenuPage/Menu.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  const navigate = useNavigate();

  // 🔹 Statiska produkter istället för fetch
  const products = [
    { id: 1, name: "Chicken Wings", price: 89, image: "chicken-wings.png" },
    { id: 2, name: "Freshed Coffee", price: 39, image: "coffee.png" },
    { id: 3, name: "Classic Burger", price: 129, image: "burger.png" },
    { id: 4, name: "Asian Rice Crisp", price: 59, image: "asian-crisps.png" },
  ];

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="menu">
      <h2>Meny</h2>
      <button
        onClick={handleGoToCart}
        className="go-to-cart"
        aria-label="Go to Cart"
      >
        Gå till kundvagn
      </button>
      <div className="menu-grid">
        {products.map((p) => (
          <div key={p.id} className="menu-card">
            <h3>{p.name}</h3>
            <img
              src={`/images/${p.image}`}
              alt={p.name}
              className="menu-image"
            />
            <p>{p.price} kr</p>
            <button
              onClick={() => toggleFavorite(p.id)}
              className="heart"
              aria-label="Toggle Favorite"
            >
              {favorites.includes(p.id) ? "♥" : "♡"}
            </button>
            <button
              onClick={() => addToCart(p)}
              className="add-to-cart"
              aria-label="Add to Cart"
            >
              Lägg till i kundvagn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
