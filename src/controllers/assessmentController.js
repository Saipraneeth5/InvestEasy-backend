const Assessment = require("../models/Assessment");
const {
    calculateRiskScore,
    classifyInvestor,
} = require("../utils/riskCalculator");

const createAssessment = async (req, res) => {
    try {
        const {
            age,
            occupation,
            location,
            income,
            savings,
            investmentBudget,
            goal,
            experience,
            answers,
        } = req.body;
        console.log( req.user);
        const userId = req.user.userId;
        if (
            age === undefined ||
            !occupation ||
            !location ||
            income === undefined ||
            savings === undefined ||
            investmentBudget === undefined ||
            !goal ||
            !experience ||
            !answers
        ) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const { riskScore, scoredAnswers } = calculateRiskScore(answers);
        const investorType = classifyInvestor(riskScore);
        const assessment = await Assessment.create({
            userId,

            age,
            occupation,
            location,

            income,
            savings,
            investmentBudget,

            goal,
            experience,

            answers: scoredAnswers,

            riskScore,
            investorType,
        });
        return res.status(201).json({
            success: true,
            assessment,
        });
    } catch (error) {
    console.error(error);

    res.status(500).json({
        message: error.message,
    });
}
};
const getAssessments = async (req, res) => {
    try {
        const assessments = await Assessment.find({
            userId: req.user.userId,
        })
            .select(
                "riskScore investorType createdAt"
            )
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            assessments,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
const getLatestAssessment = async (req, res) => {
    try {
        const assessment = await Assessment.findOne({
            userId: req.user.userId,
        }).sort({ createdAt: -1 });

        if (!assessment) {
            return res.status(404).json({
                success: false,
                message: "No assessments found",
            });
        }

        return res.status(200).json({
            success: true,
            assessment,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
module.exports = {
    createAssessment,
    getAssessments,
    getLatestAssessment,
};