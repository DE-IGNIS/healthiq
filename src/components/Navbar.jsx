import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import "./styling/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="main-container">
        <NavLink to="/" className="nav-logo">
          <img className="logo" width="50" height="50" src={logo} alt="Logo" />
          <p className="logo-text">HealthIQ</p>
        </NavLink>

        <nav className="navbar">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/content">
            Content
          </NavLink>
          <NavLink className="nav-link" to="/faq">
            FAQ's
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link-join" to="/join">
            Join
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
