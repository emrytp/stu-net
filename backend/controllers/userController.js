// backend/controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Kullanıcı Kaydı
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Email zaten kayıtlı mı?
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Bu email zaten kayıtlı." });
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı kaydet
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Kayıt başarılı",
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
    // Email var mı?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email ya da şifre hatalı." });
    }

    // Şifre doğru mu?
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email ya da şifre hatalı." });
    }

    res.status(200).json({
      message: "Giriş başarılı",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

module.exports = { registerUser, loginUser };
