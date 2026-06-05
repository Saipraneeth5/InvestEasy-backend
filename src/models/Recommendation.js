const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assessmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },

    investorType: {
      type: String,
      required: true,
      enum: ["Conservative", "Moderate", "Aggressive"],
    },

    riskScore: {
      type: Number,
      required: true,
    },

    goal: {
      type: String,
      required: true,
    },

    investmentBudget: {
      type: Number,
      required: true,
    },

    portfolioAllocation: {
      stocks: Number,
      mutualFunds: Number,
      bonds: Number,
      cash: Number,
    },

    generatedBy: {
      type: String,
      default: "rule-engine",
    },

    explanation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Recommendation",
  recommendationSchema
);