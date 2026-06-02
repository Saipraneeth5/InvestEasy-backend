const express = require("express");
const { registerUser } = require("../controllers/authController");
const { loginUser } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const { getCurrentUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getCurrentUser);
module.exports = router;