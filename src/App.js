// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import OmOssPage from "./pages/OmossPage/OmOssPage";
import MenuPage from "./pages/MenuPage/Menu";
import CartPage from "./pages/CartPage/Cart";
import CheckoutPage from "./pages/CheckoutPage/Checkout";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./context/CardContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
