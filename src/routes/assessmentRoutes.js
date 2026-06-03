const express = require("express");
const {
    createAssessment,
    getAssessments,
    getLatestAssessment
} = require("../controllers/assessmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/",authMiddleware,createAssessment);
router.get("/", authMiddleware, getAssessments);

router.get(
    "/latest",
    authMiddleware,
    getLatestAssessment
);
module.exports = router;