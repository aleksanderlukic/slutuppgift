import { useEffect, useState } from "react";
import "./Favorites.css";

export default function Favorites() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const favs = data.filter((p) => favorites.includes(p.id));
        setProducts(favs);
      });
  }, [favorites]);

  return (
    <div className="favorites">
      <h2>Dina favoriter</h2>
      {products.length === 0 && <p>Inga favoriter ännu.</p>}
      <div className="fav-grid">
        {products.map((p) => (
          <div key={p.id} className="fav-card">
            <p>{p.name}</p>
            <p>{p.price} kr</p>
          </div>
        ))}
      </div>
    </div>
  );
}
