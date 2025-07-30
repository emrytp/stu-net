const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); 

const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET;
  const expire = process.env.JWT_EXPIRE || "30d"; // fallback

  if (!secret) {
    throw new Error("JWT_SECRET ortam değişkeni tanımlı değil!");
  }

  return jwt.sign({ id: userId }, secret, {
    expiresIn: expire,
  });
};

module.exports = generateToken;
