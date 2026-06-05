const Assessment = require("../models/Assessment");
const Recommendation = require("../models/Recommendation");
const { generatePortfolio } = require("../utils/recommendationEngine");
const { generateContent } = require("../services/aiService");

const generateRecommendation = async (req, res) => {
    try {
        const latestAssessment = await Assessment.findOne({
            userId: req.user.userId,
        }).sort({ createdAt: -1 });

        if (!latestAssessment) {
            return res.status(404).json({
                message: "No assessment found. Please complete an assessment first.",
            });
        }

        const portfolioAllocation = generatePortfolio(
            latestAssessment.investorType
        );
        const prompt = `
You are InvestEasy AI, a friendly financial education assistant for complete beginners.

Your task is to explain an investment recommendation in a simple, friendly, and easy-to-understand way.

User Details:
Goal: ${latestAssessment.goal}
Investment Budget: ₹${latestAssessment.investmentBudget}
Risk Score: ${latestAssessment.riskScore}
Investor Type: ${latestAssessment.investorType}

Portfolio Allocation:
Stocks: ${portfolioAllocation.stocks}%
Mutual Funds: ${portfolioAllocation.mutualFunds}%
Bonds: ${portfolioAllocation.bonds}%
Cash: ${portfolioAllocation.cash}%

Instructions:

1. Explain the recommendation in very simple English.
2. Assume the user has no financial knowledge.
3. Avoid technical jargon.
4. Explain WHY this portfolio matches their risk profile.
5. Explain each asset type (Stocks, Mutual Funds, Bonds, Cash) in one simple sentence.
6. Use real-life analogies whenever possible.
7. Include 1-2 simple examples based on common investing behavior.
8. Mention both potential rewards and risks.
9. Keep the tone friendly, supportive, and educational.
10. Do NOT give financial advice or guarantee profits.
11. Do NOT recommend specific stocks, mutual funds, companies, or products.
12. Keep the response between 150-250 words.

Response Structure:

📊 Your Investment Style
(Explain investor type)

🎯 Why This Portfolio Fits You
(Explain reasoning)

🧩 Understanding Your Portfolio
(Explain each allocation in simple language)

🌱 Real-Life Example
(Give a practical example and a past event occured in real life in the trading world that a beginner can relate to)

⚠️ Important Reminder
(Remind that investing involves risk and this is for educational purposes)

Make the explanation feel like a knowledgeable friend is teaching a beginner, not like a financial advisor writing a report.
`;

        let explanation = "";

        try {
            explanation = await generateContent(prompt);
        } catch (error) {
            console.error("Gemini Error:", error.message);
            explanation =
                "AI explanation is currently unavailable.";
        }
        const recommendation = await Recommendation.create({
            userId: req.user.userId,
            assessmentId: latestAssessment._id,
            investorType: latestAssessment.investorType,
            riskScore: latestAssessment.riskScore,
            goal: latestAssessment.goal,
            investmentBudget: latestAssessment.investmentBudget,
            portfolioAllocation,
            explanation,
        });

        res.status(201).json({
            success: true,
            recommendation,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
const getRecommendations = async (req, res) => {
    try {
        const recommendations = await Recommendation.find({
            userId: req.user.userId,
        })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: recommendations.length,
            recommendations,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getLatestRecommendation = async (req, res) => {
    try {
        const recommendation = await Recommendation.findOne({
            userId: req.user.userId,
        }).sort({ createdAt: -1 });

        if (!recommendation) {
            return res.status(404).json({
                message: "No recommendation found",
            });
        }

        res.status(200).json({
            success: true,
            recommendation,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
module.exports = {
    generateRecommendation,
    getRecommendations,
    getLatestRecommendation,
};