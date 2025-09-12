// File: src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Cart from "./pages/CartPage/Cart.jsx";
import Favorite from "./pages/FavortitePage/Favorite.jsx";
import Menu from "./pages/MenuPage/Menu.jsx";
import Payment from "./pages/PaymentPage/Payment.jsx";


function App() {
  return (
    <BrowserRouter>
      {/* header eller navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
