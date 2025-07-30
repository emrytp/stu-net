// backend/controllers/userController.js 
const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken"); // 🔑 token fonksiyonu

// Kullanıcı Kaydı
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Bu email zaten kayıtlı." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 🔥 Token üret
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: "Kayıt başarılı",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

// Kullanıcı Girişi
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email ya da şifre hatalı." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email ya da şifre hatalı." });
    }

    // 🔥 Token üret
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Giriş başarılı",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("🚨 Login Error:", err); // 🔥 BURAYA EKLENDİ
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

module.exports = { registerUser, loginUser };
