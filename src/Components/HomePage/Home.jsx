import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Header / Section 1 */}
      <section className="section section-top">
        <header className="navbar">
          <div className="logo">🍕 Drone Delights</div>
          <nav className="menu">
            <Link to="/menu">Meny</Link>
            <Link to="/cart">🛒</Link>
            <Link to="/login">👤</Link>
            <span className="lang">SV ▼</span>
          </nav>
        </header>

        <div className="hero">
          <h1>Drone Delights</h1>
          <p>Snabbmat, levererad snabbare</p>
          <Link to="/menu">
            <button className="btn-red">Visa meny</button>
          </Link>
        </div>
      </section>

      {/* Info */}
      <section className="section">
        <h2>Vad menar vi med "snabbare"?</h2>
        <p>
          Här på Drone Delights är din tid superviktig. Våra drönare skickar
          iväg maten så fort som möjligt utan onödiga omvägar.
        </p>
        <h2>Vårt leveranssystem?</h2>
        <p>
          Vi använder avancerad drönarteknik med realtidsoptimering,
          rutthantering och ultrasnabb leverans direkt till din dörr.
        </p>
      </section>

      {/* Trendande rätter */}
      <section className="section">
        <h2>Trendande rätter</h2>
        <div className="card-row">
          <div className="card">
            <img src="/chicken.jpg" alt="Chicken Wings" />
            <p>Chicken wings</p>
          </div>
          <div className="card">
            <img src="/coffee.jpg" alt="Fresh brewed coffee" />
            <p>Fresh brewed coffee</p>
          </div>
          <div className="card">
            <img src="/rice.jpg" alt="Asian Rice Crisps" />
            <p>Asian rice crisps</p>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="section stats">
        <h2>Vårt uppdrag i siffror</h2>
        <div className="stats-boxes">
          <div className="stat-box">
            <strong>120+</strong>
            <p>Menyobjekt</p>
          </div>
          <div className="stat-box">
            <strong>58,000+</strong>
            <p>Leveranser</p>
          </div>
          <div className="stat-box">
            <strong>97%</strong>
            <p>Kundnöjdhet</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section section-bottom">
        <p>
          Sugen på något nu? Din nästa måltid kan vara i luften inom 5 minuter.
        </p>
        <Link to="/menu">
          <button className="btn-red">Börja beställa</button>
        </Link>
      </section>
    </div>
  );
}
