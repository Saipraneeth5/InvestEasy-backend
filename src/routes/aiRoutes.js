const express = require("express");

const {
    testGemini,
    askTutor,
} = require("../controllers/aiController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/test", protect, testGemini);

router.post("/tutor", protect, askTutor);

module.exports = router;