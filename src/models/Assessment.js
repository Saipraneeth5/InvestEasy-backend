const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        age: {
            type: Number,
            min: 18,
            max: 100,
            required: true
        },

        occupation: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },
        income: {
            type: Number,
            min:0,
            required: true,
        },
        savings: {
            type: Number,
            min:0,
            required: true,
        },
        investmentBudget: {
            type: Number,
            min:0,
            required: true,
        },
        goal: {
            type: String,
            enum: [
                "Capital Protection",
                "Regular Income",
                "Balanced Growth",
                "Long-Term Growth"
            ],
            required: true,
        },
        experience: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            required: true,
        },
        answers: [
            {
                questionId: {
                    type: Number,
                    required: true,
                },
                answer: {
                    type: String,
                    required: true,
                },
                score: {
                    type: Number,
                    required: true,
                },
            }
        ],
        riskScore: {
            type: Number,
            required: true,
        },
        investorType: {
            type: String,
            enum: ["Conservative", "Moderate", "Aggressive"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Assessment", assessmentSchema);