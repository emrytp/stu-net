// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// 🧠 .env dosyasını oku
dotenv.config();

const app = express();
console.log("📦 server.js başlatıldı");

const userRoutes = require("./routes/userRoutes");

// Middleware'ler
app.use(cors());
app.use(express.json());

// API route'ları
app.use("/api/users", userRoutes);

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("❌ MongoDB bağlantı hatası:", err));

// Root endpoint
app.get("/", (req, res) => {
  res.send("Stu-Net backend ayakta 🚀");
});

// Server'ı başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda çalışıyor`);
});
