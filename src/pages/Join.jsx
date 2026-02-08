import { useState } from "react";
import "./styling/Join.css";

function Join() {
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginEmailError, setLoginEmailError] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLoginEmailChange = (e) => {
    const value = e.target.value;
    setLoginEmail(value);
    setLoginEmailError(
      value === "" || isValidEmail(value) ? "" : "Invalid email format",
    );
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(loginEmail)) {
      setLoginEmailError("Please enter a valid email address");
      return;
    }
    if (!loginPassword.trim()) {
      alert("Password is required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Login successful!\nEmail: ${loginEmail}\nRemember: ${rememberMe}`);
    }, 2200);
  };

  const handleSignupEmailChange = (e) => {
    const value = e.target.value;
    setSignupEmail(value);
    setSignupEmailError(
      value === "" || isValidEmail(value) ? "" : "Invalid email format",
    );
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!signupName.trim()) {
      alert("Full name is required");
      return;
    }
    if (!isValidEmail(signupEmail)) {
      setSignupEmailError("Please enter a valid email address");
      return;
    }
    if (signupPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Signup simulation successful!\nName: ${signupName}\nEmail: ${signupEmail}`,
      );
    }, 1800);
  };

  return (
    <>
      <div className="join-body">
        <div className="particles" />

        <div className="loader" style={{ display: loading ? "flex" : "none" }}>
          <div className="ring" />
        </div>

        <div className="wrapper">
          <div
            className={`join-card ${showSignup ? "hidden" : ""}`}
            id="loginCard"
          >
            <h1 className="logo">HealthIQ</h1>
            <p className="tagline">Next-Gen Healthcare Platform</p>

            <div className="switcher">
              <button
                type="button"
                className={isUserLogin ? "active" : ""}
                onClick={() => setIsUserLogin(true)}
              >
                User Login
              </button>
              <button
                type="button"
                className={!isUserLogin ? "active" : ""}
                onClick={() => setIsUserLogin(false)}
              >
                Expert Login
              </button>
            </div>

            <form className="form" onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  value={loginEmail}
                  onChange={handleLoginEmailChange}
                  required
                  className={loginEmailError ? "invalid" : ""}
                />
                <label>Email Address</label>
                <span className="bar" />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <span className="bar" />
              </div>

              <button type="submit" className="btn primary" disabled={loading}>
                Login
              </button>
            </form>

            <p className="bottom">
              New here?{" "}
              <span
                onClick={() => setShowSignup(true)}
                style={{ cursor: "pointer", color: "#4a90e2" }}
              >
                Create Account
              </span>
            </p>
          </div>

          <div
            className={`join-card ${!showSignup ? "hidden" : ""}`}
            id="signupCard"
          >
            <h1 className="logo">Join HealthIQ</h1>
            <p className="tagline">Start your journey today</p>

            <form className="form" onSubmit={handleSignupSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
                <label>Full Name</label>
                <span className="bar" />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  value={signupEmail}
                  onChange={handleSignupEmailChange}
                  required
                  className={signupEmailError ? "invalid" : ""}
                />
                <label>Email</label>
                <span className="bar" />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <span className="bar" />
              </div>

              <button type="submit" className="btn primary" disabled={loading}>
                Sign Up
              </button>
            </form>

            <p className="bottom">
              Already have an account?{" "}
              <span
                onClick={() => setShowSignup(false)}
                style={{ cursor: "pointer", color: "#4a90e2" }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
