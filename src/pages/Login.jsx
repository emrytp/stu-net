import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [language, setLanguage] = useState("Eng");
  const [showLangOptions, setShowLangOptions] = useState(false);

  const translations = {
    Eng: {
      welcome: "Welcome Back !",
      email: "Email",
      password: "Password",
      signin: "Sign in",
      continue: "or continue with",
      register: "Don't have an account? Sign up"
    },
    Tr: {
      welcome: "Tekrar Hoş Geldin !",
      email: "E-posta",
      password: "Şifre",
      signin: "Giriş Yap",
      continue: "veya devam et",
      register: "Hesabın yok mu? Hemen kayıt ol"
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-[length:100%_auto] flex items-center justify-center relative px-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Logo */}
      <img
        src="/stu-net-logo.png"
        alt="Stu-Net Logo"
        className="absolute top-8 left-20 w-48 sm:w-52 z-50 pointer-events-none"
      />

      {/* Dil Seçimi */}
      <div className="absolute top-4 right-6 text-white text-sm z-50">
        <div
          className="cursor-pointer select-none relative"
          onClick={() => setShowLangOptions(!showLangOptions)}
        >
          {language} <span className="ml-1">▼</span>

          {showLangOptions && (
            <div className="absolute right-0 mt-1 backdrop-blur-sm bg-white/10 text-white text-sm rounded border border-white/20 w-16 z-50">
              {Object.keys(translations).map((lang) => (
                lang !== language && (
                  <div
                    key={lang}
                    className="hover:bg-white/20 px-2 py-1 cursor-pointer text-center"
                    onClick={() => {
                      setLanguage(lang);
                      setShowLangOptions(false);
                    }}
                  >
                    {lang}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-sm text-white z-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          {translations[language].welcome}
        </h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              {translations[language].email}
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className="w-[383px] h-12 px-4 rounded-md bg-white/90 text-black"
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
              className="w-[383px] h-12 px-4 rounded-md bg-white/90 text-black"
            />
          </div>

          <button
            type="submit"
            className="login-button mx-auto block"
          >
            {translations[language].signin}
          </button>
        </form>

        {/* "veya devam et" */}
        <div className="text-center text-sm mt-6 text-white">
          {translations[language].continue}
        </div>

        {/* Sosyal ikonlar */}
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

        {/* Kayıt yönlendirme */}
        <div className="text-center text-sm mt-6 text-white">
          <Link to="/register" className="underline hover:text-indigo-300">
            {translations[language].register}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
