const express = require('express');
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
// app.get("/protected",protect,(req,res)=>{
//     res.json({
//         success:true,
//         user:req.user
//     });
// });
app.get("/",(req,res)=>{
    res.json({
        message:"InvestEasy Backend is running"
    });
});
module.exports = app;