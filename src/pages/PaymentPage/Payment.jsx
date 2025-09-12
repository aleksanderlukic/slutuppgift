import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    navigate("/thankyou");
  };

  return (
    <form onSubmit={handleSubmit} className="payment">
      <h2>Betalning</h2>
      <input placeholder="Namn" required />
      <input placeholder="Adress" required />
      <select required>
        <option value="">Välj betalmetod</option>
        <option>Swish</option>
        <option>Kort</option>
      </select>
      <button type="submit">Bekräfta beställning</button>
    </form>
  );
}
