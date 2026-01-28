import "./styling/About.css";

function About() {
  return (
    <div className="about-wrapper">

      {/* HERO */}
      <section className="about-hero">
        <h1>About DietIQ</h1>
        <p>
          Making community health accessible through AI, trust,
          and inclusive technology.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="about-section">
        <h2>The Problem</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>Misinformation</h3>
            <p>
              Health advice online is often unverified,
              confusing, or misleading.
            </p>
          </div>

          <div className="about-card">
            <h3>Language Barriers</h3>
            <p>
              Most platforms fail to support regional
              and native languages.
            </p>
          </div>

          <div className="about-card">
            <h3>Limited Access</h3>
            <p>
              Rural and semi-urban communities lack
              timely, reliable guidance.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-section light">
        <h2>Why DietIQ</h2>
        <p className="about-text">
          Access to health information should not depend on geography,
          language, or digital literacy. DietIQ was created to bridge this
          gap by combining artificial intelligence with community-driven
          insights — making health guidance more relevant, inclusive,
          and trustworthy.
        </p>
      </section>

      {/* HOW */}
      <section className="about-section">
        <h2>How It Works</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>AI Intelligence</h3>
            <p>
              Personalized health insights powered by responsible AI.
            </p>
          </div>

          <div className="about-card">
            <h3>Community Input</h3>
            <p>
              Local experiences enhance accuracy and cultural relevance.
            </p>
          </div>

          <div className="about-card">
            <h3>Multilingual Access</h3>
            <p>
              Simple, understandable guidance in regional languages.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-section vision">
        <h2>Our Vision</h2>
        <p className="about-text">
          A future where access to health knowledge is universal
          independent of location, income, or language.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="about-section contact">

        <h2>Need Help or Have Questions?</h2>

        <p className="about-text">
          For further assistance or inquiries, feel free to reach out to us at
          <br />
          <a href="mailto:support@dietiq.ai" className="about-mail">
            support@dietiq.ai
          </a>
        </p>

        <div className="contact-options">

          <div className="contact-box">
            <h3>Email</h3>
            <p>support@dietiq.ai</p>
          </div>

          <div className="contact-box">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-box">
            <h3 className="contact-pill">Contact Us</h3>
            <p>
              For further assistance, please reach out to our support team.
            </p>
          </div>

  </div>

</section>


    </div>
    
  );
  
}

export default About;
