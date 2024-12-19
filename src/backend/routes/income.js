const express = require('express');
const router = express.Router();
//const db = require('../config/database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM income ORDER BY date DESC', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.render('income/index', { income: rows });
  });
});

router.post('/', (req, res) => {
  const { amount, source, date, observation } = req.body;
  db.run(
    'INSERT INTO income (amount, source, date, observation) VALUES (?, ?, ?, ?)',
    [amount, source, date, observation],
    (err) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.redirect('/income');
    }
  );
});

module.exports = router;