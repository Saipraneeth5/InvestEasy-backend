const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateContent = async (prompt) => {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response =
        await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });

      return response.text;
    } catch (error) {
      lastError = error;

      console.log(
        `Gemini attempt ${attempt} failed`
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );
    }
  }

  throw new Error(
    `Gemini Error: ${lastError.message}`
  );
};

module.exports = {
  generateContent,
};