// File: src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/HomePage/Home.jsx";
import Menu from "./pages/MenuPage/Menu.jsx";
import Cart from "./pages/CartPage/Cart.jsx";
import Favorite from "./pages/FavortitePage/Favorite.jsx";
import Payment from "./pages/PaymentPage/Payment.jsx";
import OmOss from "./pages/OmossPage/OmOss.jsx";
import LoginForm from "./pages/LoginForm/LoginForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginForm />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
