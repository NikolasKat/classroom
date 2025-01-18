const Router = require("express");
const userController = require("../controllers/user-controller");
const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/client", userController.getClient);

module.exports = router;
