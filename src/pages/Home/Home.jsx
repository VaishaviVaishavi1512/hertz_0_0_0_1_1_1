import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import hertzLogo from "../../assets/Hertz-1.png";
import codingMascots from "../../assets/codingmascots.png";

function Home() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Later we can add Supabase logout here
    navigate("/");
  };

  return (
    <div className="home-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        {/* LOGO */}
        <div className="home-logo">
          <img src={hertzLogo} alt="Hertz Logo" />
        </div>

        {/* TRACKS */}
        <div className="tracks-section">
          <h3>⌘ TRACKS</h3>

          <div className="track-card active-track">
            <div className="track-icon">▣</div>

            <div className="track-info">
              <h4>Verilog HDL</h4>
              <p>Design digital circuits</p>
              <span>32 Problems</span>
            </div>

            <div className="track-arrow">→</div>
          </div>

          <div className="track-card">
            <div className="track-icon">▣</div>

            <div className="track-info">
              <h4>SystemVerilog</h4>
              <p>Advanced verification</p>
              <span>28 Problems</span>
            </div>

            <div className="track-arrow">→</div>
          </div>

          <div className="track-card">
            <div className="track-icon embedded-icon">{"{}"}</div>

            <div className="track-info">
              <h4>Embedded C</h4>
              <p>Code for real hardware</p>
              <span>25 Problems</span>
            </div>

            <div className="track-arrow">→</div>
          </div>

          <button className="view-tracks-btn">
            ▦ View All Tracks
          </button>

          {/* QUOTE - NOW DIRECTLY BELOW VIEW ALL TRACKS */}
          <div className="quote-card">
            <div className="quote-symbol">“</div>

            <p>
              First, solve the problem.
              <br />
              Then, write the code.
              <br />
              Finally, build the future.
            </p>

            <span>— Hertz</span>
          </div>
        </div>
      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="home-main">

        {/* ================= TOP NAV ================= */}
        <header className="home-navbar">

          <div className="nav-links">
            <button className="nav-item active-nav">
              ▣ Problems
            </button>

            <button className="nav-item">
              ♙ Learn
            </button>

            <button className="nav-item">
              ♛ Contests
            </button>

            <button className="nav-item">
              ◌ Discuss
            </button>
          </div>


          <div className="nav-right">

            {/* FRESH ACCOUNT STREAK */}
            <div className="streak-top">
              🔥 <span>0</span>
            </div>

            <button className="notification-btn">
              ♧
            </button>

            {/* PROFILE DROPDOWN */}
            <div className="profile-menu">

              <button
                className="profile-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="profile-avatar">
                  V
                </div>

                <span className="profile-name">
                  Vaishavi
                </span>

                <span className="profile-arrow">
                  {showDropdown ? "⌃" : "⌄"}
                </span>
              </button>


              {showDropdown && (
                <div className="profile-dropdown">

                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/profile")}
                  >
                    <span>♙</span>
                    Profile
                  </button>

                  <button
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <span>⇥</span>
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>
        </header>


        {/* ================= DASHBOARD ================= */}
        <div className="dashboard-content">


          {/* ============ CENTER COLUMN ============ */}
          <section className="center-content">

            {/* HERO */}
            <div className="home-hero-section">

              <div className="hero-text">

                <h1>
                  Code the hardware.
                </h1>

                <h2>
                  Build the future.
                </h2>

                <p>
                  Solve real hardware problems in Verilog,
                  SystemVerilog and Embedded C.
                </p>

                <div className="search-box">
                  <span className="search-icon">⌕</span>

                  <input
                    type="text"
                    placeholder="Search problems, topics or circuits..."
                  />

                  <span className="search-options">
                    ☷
                  </span>
                </div>

              </div>


              <div className="hero-mascot">
                <img
                  src={codingMascots}
                  alt="Coding mascots"
                />
              </div>

            </div>


            {/* ============ POPULAR PROBLEMS ============ */}
            <div className="popular-section">

              <div className="section-title-row">
                <h2>Popular Problems</h2>

                <button className="view-all-btn">
                  View All
                </button>
              </div>


              <div className="problem-filters">

                <button className="filter active-filter">
                  All
                </button>

                <button className="filter">
                  Easy
                </button>

                <button className="filter">
                  Medium
                </button>

                <button className="filter">
                  Hard
                </button>


                <button className="language-filter">
                  All Languages⌄
                </button>

              </div>


              {/* EMPTY STATE - NO PROBLEMS */}
              <div className="empty-problems">

                <div className="empty-icon">
                  ▱
                </div>

                <h3>No problems yet</h3>

                <p>
                  Start your journey by exploring the tracks
                  <br />
                  and solving your first problem.
                </p>

              </div>


              <button className="solve-more-btn">
                Solve More Problems →
              </button>

            </div>

          </section>


          {/* ============ RIGHT COLUMN ============ */}
          <aside className="right-panel">


            {/* STREAK */}
            <div className="dashboard-card streak-card">

              <h3>Your Streak</h3>

              <div className="streak-number">
                <span className="fire-icon">🔥</span>

                <strong>0</strong>

                <span>days in a row!</span>
              </div>

              <p className="fresh-account-text">
                Solve problems daily to build your streak!
              </p>


              <div className="week-days">

                <div>
                  <span className="day-circle"></span>
                  <small>M</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>T</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>W</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>T</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>F</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>S</small>
                </div>

                <div>
                  <span className="day-circle"></span>
                  <small>S</small>
                </div>

              </div>

            </div>


            {/* PROGRESS */}
            <div className="dashboard-card progress-card">

              <div className="card-heading">
                <h3>Your Progress</h3>

                <span>All Languages⌄</span>
              </div>


              <div className="progress-content">

                <div className="progress-circle">
                  <div>
                    <strong>0</strong>
                    <span>Solved</span>
                  </div>
                </div>


                <div className="progress-details">

                  <div>
                    <span>Total Problems</span>
                    <strong>0 / 0</strong>
                  </div>

                  <div>
                    <span>Ranking</span>
                    <strong>-</strong>
                  </div>

                </div>

              </div>


              <p className="fresh-account-text">
                Solve problems to see your progress here!
              </p>

            </div>


            {/* CONTINUE SOLVING */}
            <div className="dashboard-card continue-card">

              <div className="card-heading">
                <h3>Continue Solving</h3>

                <button>View all</button>
              </div>


              <div className="empty-small-state">

                <div className="small-empty-icon">
                  ⌘
                </div>

                <div>
                  <h4>No problems in progress</h4>

                  <p>
                    Solve a problem to see it here!
                  </p>
                </div>

              </div>

            </div>


            {/* ACHIEVEMENTS */}
            <div className="dashboard-card achievements-card">

              <div className="card-heading">
                <h3>Achievements</h3>

                <button>View all</button>
              </div>


              {/* EMPTY STATE */}
              <div className="empty-small-state">

                <div className="small-empty-icon">
                  ♕
                </div>

                <div>
                  <h4>No achievements yet</h4>

                  <p>
                    Solve problems to earn badges!
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Home;