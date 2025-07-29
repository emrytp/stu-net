// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için
import "./LandingPage.css";
import { FiChevronDown } from "react-icons/fi";
import { FaUser, FaUserPlus } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="/stu-net-logo.png" alt="Stu-Net Logo" />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
        <div className="navbar-right">
          <div className="lang-selector">
            Eng <FiChevronDown />
          </div>
          <button
            className="login-btn"
            onClick={() => navigate("/login")} // 🠒 Login yönlendirme
          >
            <FaUser /> Login
          </button>
          <button
            className="signup-btn"
            onClick={() => navigate("/register")} // 🠒 Register yönlendirme
          >
            <FaUserPlus /> Sign Up
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="hero-section">
        <h1 className="hero-title glow-text">
          Next-Gen Student Platform
        </h1>
        <p className="hero-subtext">
          A dynamic space where students connect, share ideas, and experience campus life all in one platform.
        </p>
        <p className="coming-soon">Coming Soooon...</p>
      </main>
    </div>
  );
};

export default LandingPage;
