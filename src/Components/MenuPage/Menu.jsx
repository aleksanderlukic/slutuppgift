// File: src/Components/MenuPage/Menu.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
