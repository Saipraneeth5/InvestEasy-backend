const QUESTION_SCORES = {
    1: {
        question: "Investment Horizon",
        options: {
            "Less than 1 year": 5,
            "1-3 years": 10,
            "3-5 years": 15,
            "5-10 years": 20,
            "More than 10 years": 25,
        },
    },

    2: {
        question: "Market Crash Reaction",
        options: {
            "Sell Everything": 5,
            "Sell Some": 10,
            "Hold": 15,
            "Buy More": 25,
        },
    },

    3: {
        question: "Loss Tolerance",
        options: {
            "Less than 5%": 5,
            "5-10%": 10,
            "10-20%": 15,
            "20-30%": 20,
            "More than 30%": 25,
        },
    },

    4: {
        question: "Investment Knowledge",
        options: {
            "No Knowledge": 5,
            "Basic Knowledge": 10,
            "Average Knowledge": 15,
            "Good Knowledge": 20,
            "Advanced Knowledge": 25,
        },
    },

    5: {
        question: "Portfolio Preference",
        options: {
            "Guaranteed Returns": 5,
            "Mostly Safe Investments": 10,
            "Balanced Portfolio": 15,
            "Growth Focused": 20,
            "Maximum Growth Potential": 25,
        },
    },

    6: {
        question: "Expected Return vs Safety",
        options: {
            "Maximum Safety": 5,
            "Mostly Safe with Some Growth": 10,
            "Balanced Risk and Return": 15,
            "Growth-Oriented": 20,
            "Aggressive Growth": 25,
        },
    },
};

const TOTAL_QUESTIONS =
    Object.keys(QUESTION_SCORES).length;


const calculateRiskScore = (answers) => {
    if (!Array.isArray(answers)) {
        throw new Error("Answers must be an array");
    }
    if (answers.length !== TOTAL_QUESTIONS) {
        throw new Error(
            `All ${TOTAL_QUESTIONS} questions must be answered`
        );
    }
    let riskScore = 0;
    const scoredAnswers = [];
    const seenQuestions = new Set();

    for (const answerObj of answers) {
        const { questionId, answer } = answerObj;

        const question = QUESTION_SCORES[questionId];
        if (seenQuestions.has(questionId)) {
            throw new Error(
                `Duplicate questionId: ${questionId}`
            );
        }

        seenQuestions.add(questionId);

        if (!question) {
            throw new Error(`Invalid questionId: ${questionId}`);
        }

        const score = question.options[answer];

        if (score === undefined) {
            throw new Error(
                `Invalid answer "${answer}" for questionId ${questionId}`
            );
        }

        riskScore += score;

        scoredAnswers.push({
            questionId,
            answer,
            score,
        });
    }

    return {
        riskScore,
        scoredAnswers,
    };
};
const classifyInvestor = (riskScore) => {
    if (riskScore <= 70) {
        return "Conservative";
    }

    if (riskScore <= 110) {
        return "Moderate";
    }

    return "Aggressive";
};
module.exports = {
    QUESTION_SCORES,
    calculateRiskScore,
    classifyInvestor,
};