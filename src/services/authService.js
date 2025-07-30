// src/services/authService.js
import api from "./api";

// Giriş yap
export const login = async (email, password) => {
  const response = await api.post("/users/login", { email, password });
  return response.data;
};

// Kayıt ol
export const register = async (name, email, password) => {
  const response = await api.post("/users/register", { name, email, password });
  return response.data;
};
