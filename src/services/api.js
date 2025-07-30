// src/services/api.js
import axios from "axios";

// Temel axios instance'ı
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API root'u
});

// Her istek öncesi token varsa ekle
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
