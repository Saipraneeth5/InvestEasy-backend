const { generateContent } = require("../services/aiService");

const testGemini = async (req, res) => {
    try {
        const response = await generateContent(
            "Explain mutual funds in 50 words."
        );

        res.status(200).json({
            success: true,
            response,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const askTutor = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question || !question.trim()) {
            return res.status(400).json({
                message: "Question is required",
            });
        }

        const prompt = `
You are InvestEasy AI Tutor.

Your role is to teach investing concepts to complete beginners.

Rules:

1. Use very simple English.
2. Explain like a friendly teacher.
3. Use examples and analogies.
4. Keep answers under 250 words.
5. Avoid unnecessary financial jargon.
6. Never guarantee profits.
7. Never provide personalized financial advice.
8. Never recommend specific stocks, mutual funds, or companies.
9. If the question is unrelated to investing or personal finance, politely redirect the user back to investment-related topics.

Question:
${question}
`;

        const answer = await generateContent(prompt);

        res.status(200).json({
            success: true,
            answer,
        });
    } catch (error) {
        res.status(500).json({
  answer:
    "The AI tutor is currently unavailable. Please try again in a few moments."
});
    }
};

module.exports = {
    testGemini,
    askTutor,
};