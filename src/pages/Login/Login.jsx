import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import maleMascot from "../../assets/mascot-male.png";
import femaleMascot from "../../assets/mascot-female.png";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // After login, go to homepage
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-content">

        {/* LEFT MASCOT */}
        <div className="login-mascot">
          <img src={maleMascot} alt="Male mascot" />
        </div>

        {/* LOGIN BOX */}
        <div className="login-card">
          <div className="login-heading">
            <h1>
              Welcome Back! <span>👋</span>
            </h1>
            <p>Ready to code the hardware?</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="#forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Log In →
            </button>
          </form>

          <div className="login-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup"> Sign up</Link>
          </p>
        </div>

        {/* RIGHT MASCOT */}
        <div className="login-mascot">
          <img src={femaleMascot} alt="Female mascot" />
        </div>

      </div>
    </div>
  );
}

export default Login;