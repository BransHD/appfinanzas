const express = require('express');
const router = express.Router();
const { monthlyData, categoryData, calculateTotals } = require('../utils/sampleData');
const { getLatestTransactions } = require('../utils/transactions');

router.get('/', async (req, res) => {
  try {
    const totals = calculateTotals();
    const latestTransactions = getLatestTransactions();

    res.render('dashboard/dashboard', {
      monthlyData,
      categoryData,
      totals,
      latestTransactions
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;