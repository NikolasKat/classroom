const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
   "/register",
   [
      check("email", "Это поле не может быть пустым").notEmpty(),
      check("password", "Это поле не может быть пустым").notEmpty(),
      check("password", "Это поле не может иметь такую длину").isLength({
         min: 7,
         max: 14,
      }),

      check("lastName", "Это поле не может быть пустым").notEmpty(),
      check("firstName", "Это поле не может быть пустым").notEmpty(),
   ],
   controller.registration
);
router.post("/login", controller.login);
router.get("/client", controller.getClient);

module.exports = router;
