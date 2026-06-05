const express = require("express");
const testGemini  = require("../controllers/aiController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
router.get("/test", protect, testGemini);
module.exports = router;