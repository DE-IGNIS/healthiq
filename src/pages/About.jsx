import "./styling/About.css";

function About() {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <h1>About HealthIQ</h1>
        <p>
          A smart health platform combining community discussions, AI tools,
          and practical health utilities — all in one place.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>Community Chat System</h3>
            <p>
              Discuss health topics, share experiences, and view expert-verified
              insights. Upvote useful advice and filter by category.
            </p>
          </div>

          <div className="about-card">
            <h3>Disease Outbreak Heatmap</h3>
            <p>
              Visualize regional disease trends and identify outbreak intensity
              through interactive heat-based mapping.
            </p>
          </div>

          <div className="about-card">
            <h3>Health Awareness Trivia</h3>
            <p>
              Improve your knowledge with structured quizzes focused on hygiene,
              prevention, medicine, and general wellness.
            </p>
          </div>

          <div className="about-card">
            <h3>Ingredient Safety Checker</h3>
            <p>
              Search any food ingredient to understand what it is, whether it’s
              natural or artificial, and its potential risk level.
            </p>
          </div>

          <div className="about-card">
            <h3>Adaptive Diet Planner</h3>
            <p>
              Generate personalized diet suggestions based on health goals and
              nutritional balance.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section light">
        <h2>How HealthIQ Works</h2>
        <p className="about-text">
          HealthIQ combines real-time community interaction with intelligent
          health tools. Users can engage in discussions, explore outbreak data,
          test their knowledge, analyze food ingredients, and generate diet
          plans — all within a single integrated platform.
        </p>
      </section>

      <section className="about-section vision">
        <h2>Our Purpose</h2>
        <p className="about-text">
          To make reliable health information interactive, accessible, and
          actionable — not just readable.
        </p>
      </section>

      <section className="about-section contact">
        <h2>Need Help or Have Questions?</h2>

        <p className="about-text">
          For assistance or support, contact us at:
          <br />
          <a href="mailto:support@HealthIQ.ai" className="about-mail">
            support@HealthIQ.ai
          </a>
        </p>

        <div className="contact-options">
          <div className="contact-box">
            <h3>Email</h3>
            <p>support@HealthIQ.ai</p>
          </div>

          <div className="contact-box">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-box">
            <h3>Platform</h3>
            <p>AI-powered community health system</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;