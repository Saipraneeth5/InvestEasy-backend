const express = require('express');
const protect = require("./middleware/authMiddleware");
const app = express();

const authRoutes = require("./routes/authRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/assessments",assessmentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "InvestEasy Backend is running"
    });
});
module.exports = app;