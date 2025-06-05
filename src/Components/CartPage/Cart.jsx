import "./Cart.css";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Din varukorg</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>
            {item.name} x{item.qty}
          </span>
          <span>{item.price * item.qty} kr</span>
        </div>
      ))}
      <p className="total">Totalt: {total} kr</p>
      <a href="/payment">
        <button className="checkout-btn">Till betalning</button>
      </a>
    </div>
  );
}
