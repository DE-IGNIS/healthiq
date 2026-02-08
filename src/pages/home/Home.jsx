import { Link } from "react-router-dom";
import "../styling/Home.css";
import heroImg from "../../assets/hero-health.svg";

function Home() {
  return (
    <div className="home-page">

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

      <section className="features-section">
        <h2 className="features-title">Explore Our Features</h2>

        <div className="container">
          <div className="card">
            <Link className="feature-link" to="chat">
              <h2>Community Health Network</h2>
              <p>
                Public discussions on health-related topics , expert
                verification for ensuring medical credibility. In Real time
                extracts disease and location insights from discussions.
              </p>
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
              <h2>Health Awareness Trivia</h2>
              <p>
                Structured health quizzes focused on hygiene,
                medicines,preventive care, essential health knowledge in
                general.
              </p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="dietgen">
              <h2>Adaptive Diet Plan Generator</h2>
              <p>
                Personalized calorie requirements using BMR and balanced
                macronutrient distribution with diet plans aligned with
                realistic and sustainable Indian food habits.
              </p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="insight">
              <h2>Ingredient Insight</h2>
              <p>
                Providing simplified information on common/uncommon food
                ingredients with health benefits and potential risks.
                Highlighting hidden ingredient concerns.
              </p>
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
