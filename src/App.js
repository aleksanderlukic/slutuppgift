// File: src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import Home from "./Components/HomePage/Home.jsx";
import Cart from "./Components/CartPage/Cart.jsx";
import Favorite from "./Components/FavortitePage/Favorite.jsx";
import Menu from "./Components/MenuPage/Menu.jsx";
import Payment from "./Components/PaymentPage/Payment.jsx";
import ThankYou from "./Components/ThankYouPage/Thankyou.jsx";

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
        <Route path="/thankyou" element={<ThankYou />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
