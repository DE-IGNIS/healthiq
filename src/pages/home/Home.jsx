import { Link } from "react-router-dom";
import "../styling/Home.css";
import heroImg from "../../assets/hero-health.svg";

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">

        <div className="hero-text">
          <h1>
            Smarter Community Health
            <br />
            Powered by AI
          </h1>

          <p>
            DietIQ helps communities access reliable health and nutrition
            guidance through intelligent, multilingual technology.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Health AI" />
        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <h2 className="features-title">Explore Features</h2>

        <div className="container">

          <div className="card">
            <Link className="feature-link" to="feature1">
              <h2>AI Health Assistant</h2>
              <p>Instant health guidance powered by AI.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="feature2">
              <h2>Personalized Diet Plans</h2>
              <p>Custom nutrition suggestions for your lifestyle.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="feature3">
              <h2>Multilingual Support</h2>
              <p>Access guidance in your preferred language.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="feature4">
              <h2>Community Insights</h2>
              <p>Learn from local community experiences.</p>
            </Link>
          </div>

          <div className="card">
            <h2>Health Tracking</h2>
            <p>Monitor habits and daily wellness.</p>
          </div>

          <div className="card">
            <h2>Verified Knowledge</h2>
            <p>Reliable and trusted health information.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
