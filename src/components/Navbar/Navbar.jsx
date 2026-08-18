import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Hertz.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Hertz Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <a href="#problems">Problems</a>
        <a href="#learn">Learn</a>
        <a href="#contests">Contests</a>
      </div>

      <div className="nav-actions">
        <button
          className="login-button"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>

        <button
          className="get-started-button"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;