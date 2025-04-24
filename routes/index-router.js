const express = require("express");
const router = express.Router();
const {
  signUpController,
  loginController,
  logOutController,
} = require("../controllers/index-controller");

router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", logOutController);

module.exports = router;
