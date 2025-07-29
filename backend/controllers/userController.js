// backend/controllers/userController.js
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Şimdilik gerçek kullanıcı kaydı yerine sahte bir yanıt dönüyoruz
    // İleride burada veritabanına kayıt işlemi olacak
    res.status(201).json({
      message: "Kullanıcı başarıyla oluşturuldu",
      user: {
        email,
        password, // (hashlenecek!)
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Kayıt sırasında bir hata oluştu." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Şimdilik sabit kullanıcı kontrolü (veritabanı bağlantısı henüz yok)
    if (email === "test@example.com" && password === "123456") {
      res.status(200).json({
        message: "Giriş başarılı",
        token: "fake-jwt-token"
      });
    } else {
      res.status(401).json({ error: "Geçersiz e-posta veya şifre" });
    }
  } catch (error) {
    res.status(500).json({ error: "Giriş sırasında bir hata oluştu." });
  }
};
