// src/pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "./Register.css";

const Register = () => {
  const [language, setLanguage] = useState("Eng");
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useAuth(); 

  const translations = {
    Eng: {
      welcome: "Create Your Account",
      name: "Name",
      email: "Email",
      password: "Password",
      register: "Register",
      continue: "or continue with",
      agreement: "By signing up, you agree to our",
      terms: "Terms",
      privacy: "Privacy Policy",
      loginInstead: "Already have an account? Sign in"
    },
    Tr: {
      welcome: "Hesabını Oluştur",
      name: "İsim",
      email: "E-posta",
      password: "Şifre",
      register: "Kayıt Ol",
      continue: "veya devam et",
      agreement: "Kaydolarak şunları kabul etmiş olursun:",
      terms: "Şartlar",
      privacy: "Gizlilik Politikası",
      loginInstead: "Zaten hesabın var mı? Giriş Yap"
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userData = await register(name, email, password);
      loginUser(userData); // ✅ Otomatik login
      alert("Kayıt başarılı, giriş yapıldı!");
      navigate("/");
    } catch (error) {
      console.error("Kayıt hatası:", error.response?.data || error.message);
      alert("Kayıt başarısız. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-[length:100%_auto] flex items-center justify-center relative px-4"
    >
      <img
        src="/stu-net-logo.png"
        alt="Stu-Net Logo"
        className="absolute top-8 left-20 w-48 sm:w-52 z-50 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="absolute top-4 right-6 text-white text-sm z-50">
        <div
          className="cursor-pointer select-none relative"
          onClick={() => setShowLangOptions(!showLangOptions)}
        >
          {language} <span className="ml-1">▼</span>
          {showLangOptions && (
            <div className="absolute right-0 mt-1 bg-white text-black text-sm rounded shadow-md w-16 z-50">
              {["Eng", "Tr"].filter((lang) => lang !== language).map((lang) => (
                <div
                  key={lang}
                  className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                  onClick={() => {
                    setLanguage(lang);
                    setShowLangOptions(false);
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-sm text-white z-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          {translations[language].welcome}
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              {translations[language].name}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[383px] h-12 px-4 rounded-md bg-white/90 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              {translations[language].email}
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[383px] h-12 px-4 rounded-md bg-white/90 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">
              {translations[language].password}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[383px] h-12 px-4 rounded-md bg-white/90 text-black"
              required
            />
          </div>

          <button type="submit" className="register-button mx-auto block">
            {translations[language].register}
          </button>
        </form>

        <div className="text-center text-sm mt-6 text-white">
          {translations[language].continue}
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <div className="bg-white p-3 rounded-md flex justify-center items-center w-full">
            <img src="/twitter.png" alt="Twitter" className="h-6" />
          </div>
          <div className="bg-white p-3 rounded-md flex justify-center items-center w-full">
            <img src="/instagram.png" alt="Instagram" className="h-6" />
          </div>
          <div className="bg-white p-3 rounded-md flex justify-center items-center w-full">
            <img src="/email.png" alt="Email" className="h-6" />
          </div>
        </div>

        <div className="text-center text-xs text-white mt-6">
          {translations[language].agreement}{" "}
          <span className="underline cursor-pointer">{translations[language].terms}</span> &{" "}
          <span className="underline cursor-pointer">{translations[language].privacy}</span>
        </div>

        <div className="text-center text-sm text-white mt-3">
          <Link to="/login" className="underline hover:text-indigo-300">
            {translations[language].loginInstead}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
