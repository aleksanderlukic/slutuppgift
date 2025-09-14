// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import OmOssPage from "./pages/OmossPage/OmOss";
import MenuPage from "./pages/MenuPage/Menu";
import CartPage from "./pages/CartPage/Cart";
import Navbar from "./Components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ addToCart funktion
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-oss" element={<OmOssPage />} />
        <Route
          path="/menu"
          element={
            <MenuPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart} // 👈 Skickar med
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
