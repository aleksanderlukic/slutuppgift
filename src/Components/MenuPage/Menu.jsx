import { useEffect, useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

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

  return (
    <div className="menu">
      <h2>Meny</h2>
      <div className="menu-grid">
        {products.map((p) => (
          <div key={p.id} className="menu-card">
            <h3>{p.name}</h3>
            <p>{p.price} kr</p>
            <button onClick={() => toggleFavorite(p.id)} className="heart">
              {favorites.includes(p.id) ? "♥" : "♡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
