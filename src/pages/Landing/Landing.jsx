import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Navbar />

      <main className="hero-section">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <p className="hero-tagline">
            THE CODING PLATFORM FOR ELECTRONICS
          </p>

          <h1 className="hero-title">
            CODE THE
            <span>HARDWARE.</span>
          </h1>

          <p className="hero-description">
            Practice Verilog, SystemVerilog and Embedded C through real coding
            challenges. Build your skills one problem at a time.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => navigate("/signup")}
            >
              Start Solving <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/signup")}
            >
              Explore Problems
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Challenges</p>
            </div>

            <div className="stat">
              <h3>3</h3>
              <p>Tracks</p>
            </div>

            <div className="stat">
              <h3>∞</h3>
              <p>Possibilities</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="code-card">
          <div className="code-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>and_gate.v</p>
          </div>

          <div className="code-content">
            <pre>{`module and_gate(
    input a,
    input b,
    output y
);

    assign y = a & b;

endmodule`}</pre>
          </div>

          <div className="accepted-card">
            <div className="checkmark">✓</div>

            <div>
              <h3>Accepted!</h3>
              <p>4 / 4 test cases passed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;