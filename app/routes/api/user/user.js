const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/userController");
const auth = require("../../../config/auth")
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});



router.get("/me", auth, limiter, userController.getUserDetails);

router.post("/register", limiter, userController.registerNewUser);
router.post("/login", limiter, userController.loginUser);


module.exports = router;