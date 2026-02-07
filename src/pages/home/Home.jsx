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
            HealthIQ helps communities access reliable health and nutrition
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
            <Link className="feature-link" to="chat">
              <h2>Health Chat</h2>
              <p>Health Chat ke bare me likhna hai</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="heatmap">
              <h2>Disease Outbreak HeatMap</h2>
              <p>Disease Outbreak ke bare me likhna hai.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="trivia">
              <h2>Health Trivia</h2>
              <p>Health trivia ke bare me likhna hai.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="dietgen">
              <h2>Ai Enhanched Diet plan generator</h2>
              <p>Ai Enhanched Diet plan generator ke bare me likhna hai.</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="feature5">
              <h2>Ingredient list tracker</h2>
              <p>Ingredient list tracker ke bare me likhna hai.</p>
            </Link>
          </div>
          
          {/* <div className="card">
            <Link className="feature-link" to="feature6">
              <h2>Feature6</h2>
              <p>Feature6 ke bare me.</p>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
