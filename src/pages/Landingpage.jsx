// src/pages/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { FiChevronDown } from "react-icons/fi";
import { FaUser, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [language, setLanguage] = useState("Eng");

  const translations = {
    Eng: {
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      profile: "Profile",
    },
    Tr: {
      login: "Giriş Yap",
      signup: "Kayıt Ol",
      logout: "Çıkış Yap",
      profile: "Profilim",
    },
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/"); // çıkış yaptıktan sonra ana sayfaya dön
  };

  return (
    <div className="landing-container">
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
          <div
            className="lang-selector"
            onClick={() =>
              setLanguage((prev) => (prev === "Eng" ? "Tr" : "Eng"))
            }
          >
            {language} <FiChevronDown />
          </div>

          {user ? (
            <>
              <button className="login-btn" onClick={() => navigate("/profile")}>
                <FaUser /> {translations[language].profile}
              </button>
              <button className="signup-btn" onClick={handleLogout}>
                <FaSignOutAlt /> {translations[language].logout}
              </button>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                <FaUser /> {translations[language].login}
              </button>
              <button className="signup-btn" onClick={() => navigate("/register")}>
                <FaUserPlus /> {translations[language].signup}
              </button>
            </>
          )}
        </div>
      </header>

      <main className="hero-section">
        <h1 className="hero-title glow-text">Next-Gen Student Platform</h1>
        <p className="hero-subtext">
          A dynamic space where students connect, share ideas, and experience campus life all in one platform.
        </p>
        <p className="coming-soon">Coming Soooon...</p>
      </main>
    </div>
  );
};

export default LandingPage;
