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
module.exports = testGemini;