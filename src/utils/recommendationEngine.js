const PORTFOLIOS = {
  Conservative: {
    stocks: 20,
    mutualFunds: 30,
    bonds: 40,
    cash: 10,
  },

  Moderate: {
    stocks: 40,
    mutualFunds: 40,
    bonds: 15,
    cash: 5,
  },

  Aggressive: {
    stocks: 70,
    mutualFunds: 20,
    bonds: 5,
    cash: 5,
  },
};

const generatePortfolio = (investorType) => {
  if (!investorType) {
    throw new Error("Investor type is required");
  }

  const portfolio = PORTFOLIOS[investorType];

  if (!portfolio) {
    throw new Error(
      "Invalid investor type. Must be Conservative, Moderate, or Aggressive"
    );
  }

  return portfolio;
};

module.exports = {
  generatePortfolio,
};