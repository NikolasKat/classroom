const Router = require("express");
const userController = require("../controllers/user-controller");
const subjectController = require("../controllers/subject-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");

// routing for auth
router.post(
   "/registration",
   body("email").isEmail(),
   body("password").isLength({ min: 4, max: 12 }),
   userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/client", authMiddleware, userController.getClient);

// routing for Subjects
router.post("/addSubject", subjectController.addSubject);
// router.put("/addTask", subjectController.addTask);
router.put("/connectStudent", subjectController.connectStudent);
router.put("/disconnectStudent", subjectController.disconnectStudent);
// router.delete("/deleteSubject", subjectController.removeSubject);
router.get("/getSubjects", subjectController.getSubjects);

module.exports = router;
