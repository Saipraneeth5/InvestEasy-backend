const express = require("express");

const {
  generateRecommendation,
  getRecommendations,
  getLatestRecommendation,
} = require("../controllers/recommendationController");

const  protect  = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/generate", protect, generateRecommendation);

router.get("/", protect, getRecommendations);

router.get("/latest", protect, getLatestRecommendation);

module.exports = router;