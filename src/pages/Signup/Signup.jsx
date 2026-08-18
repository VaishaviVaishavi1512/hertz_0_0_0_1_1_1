import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

import maleMascot from "../../assets/mascot-male.png";
import femaleMascot from "../../assets/mascot-female.png";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // For now, directly navigate to the homepage
    // Later we will add actual Supabase authentication here
    navigate("/home");
  };

  return (
    <div className="signup-page">

      <div className="signup-content">

        {/* Male Mascot */}
        <div className="signup-mascot left-mascot">
          <img src={maleMascot} alt="HERTZ mascot" />
        </div>

        {/* Signup Card */}
        <div className="signup-card">

          <div className="signup-heading">
            <h1>Hey! 👋</h1>
            <p>What should I call you?</p>
          </div>

          {/* Added onSubmit */}
          <form className="signup-form" onSubmit={handleSignup}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Enter Password</label>

              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
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

            <div className="input-group">
              <label>Re-enter Password</label>

              <div className="password-box">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <button type="submit" className="create-account-btn">
              Create Account →
            </button>

          </form>

          <div className="signup-divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="already-account">
            Already have an account?
            <Link to="/login"> Log in</Link>
          </p>

        </div>

        {/* Female Mascot */}
        <div className="signup-mascot right-mascot">
          <img src={femaleMascot} alt="HERTZ mascot" />
        </div>

      </div>

    </div>
  );
}

export default Signup;