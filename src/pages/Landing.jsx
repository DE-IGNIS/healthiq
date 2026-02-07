import "./styling/Landing.css";
import food_img from "../assets/landing_food.webp";
import logo from "../assets/react.svg";

function Landing() {
  return (
    <div className="landing-wrapper">

      
      <section className="hero-section">

        <div className="hero-card">
          <div className="hero-card-header">
            <img src={logo} alt="HealthIQ" />
            <h3>HealthIQ</h3>
          </div>

          <h2>Health Care by Community & AI</h2>

          <p>
            AI-driven, multilingual health intelligence
            for inclusive care.
          </p>
        </div>

        <img
          src={food_img}
          alt="Healthy food"
          className="hero-image"
        />

      </section>

      
      <section className="content-section">

        <div className="content-left">
          <h2>Community Health, Powered by AI</h2>
          <p>
            Access to reliable health and nutrition guidance remains a major
            challenge in semi-urban and rural communities. Misinformation,
            language barriers, low digital literacy, and lack of localized
            support often prevent timely health decisions. As a result,
            preventable health issues, poor nutrition, and sanitation-related
            risks continue to impact community well-being.
            <br /><br />
            HealthIQ addresses this gap by combining artificial intelligence,
            community knowledge, and multilingual accessibility.
          </p>
        </div>

        <div className="content-right">
          <h3>Our Mission</h3>
          <p>
            To empower communities with accessible, AI-driven health
            intelligence that is simple, multilingual, and culturally relevant —
            enabling early detection, reducing misinformation, and improving
            overall community well-being through collective participation and
            trust.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Landing;
