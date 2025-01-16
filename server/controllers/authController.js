const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateAccessToken = (userId) => {
   const payload = {
      userId,
   };

   return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
};

class AuthController {
   async registration(req, res) {
      try {
         const errors = validationResult(req);

         if (!errors.isEmpty()) {
            return res
               .status(400)
               .json({ message: "Ошибка при валидации" }, errors);
         }

         const { email, password, firstName, lastName } = req.body;
         const candidate = await User.findOne({ email });

         if (candidate) {
            throw new Error("Пользователь с таким адресом уже существует");
         }

         const hashPassword = bcrypt.hashSync(password, 7);

         const user = new User({
            email,
            password: hashPassword,
            lastName,
            firstName,
         });

         await user.save();

         return res.json({ message: "Пользователь успешно зарегистрирован" });
      } catch (error) {
         console.log(error);
         res.status(400).json({ message: "Registration error" });
      }
   }

   async login(req, res) {
      try {
         const { email, password } = req.body;
         const user = await User.findOne({ email });

         if (!candidate) {
            throw new Error("Пользователь с таким адресом не найден");
         }

         const isValidPassword = bcrypt.compareSync(password, user.password);

         if (!isValidPassword) {
            throw new Error("Введён неверный пароль");
         }

         const token = generateAccessToken(user._id);

         return res.json({ token });
      } catch (error) {
         console.log(error);
         res.status(400).json({ message: "Login error" });
      }
   }

   async getClient(req, res) {
      try {
         res.json(["Kolia", "Alexander"]);
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = new AuthController();
