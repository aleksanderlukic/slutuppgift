import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Drone Delights</h1>
        <p className="subtext">Snabbmat, levererad snabbare</p>
        <Link to="/menu">
          <button className="cta">Visa meny</button>
        </Link>
      </header>
      <section className="info">
        <h2>Vad menar vi med "snabbare"?</h2>
        <p>
          Våra autonoma drönare skickar din beställning direkt efter tillagning
          – snabbare, smartare, punktlig leverans.
        </p>
      </section>
      <section className="trending">
        <h2>Trendande rätter</h2>
        <div className="card-container">
          <div className="card">
            <img src="/chicken.jpg" alt="" />
            <p>Chicken Wings</p>
          </div>
          <div className="card">
            <img src="/coffee.jpg" alt="" />
            <p>Fresh Coffee</p>
          </div>
          <div className="card">
            <img src="/rice.jpg" alt="" />
            <p>Rice Crisps</p>
          </div>
        </div>
      </section>
    </div>
  );
}
