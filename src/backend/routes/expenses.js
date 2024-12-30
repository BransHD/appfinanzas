const express = require('express');
const router = express.Router();
//const db = require('../config/database');
/*
router.get('/', (req, res) => {
  db.all(
    `SELECT e.*, c.name as category_name 
     FROM expenses e 
     LEFT JOIN categories c ON e.category_id = c.id 
     ORDER BY date DESC`,
    [],
    (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      db.all('SELECT * FROM categories', [], (err, categories) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        res.render('expenses/index', { expenses: rows, categories });
      });
    }
  );
});

router.post('/', (req, res) => {
  const { amount, description, category_id, date, observation } = req.body;
  db.run(
    'INSERT INTO expenses (amount, description, category_id, date, observation) VALUES (?, ?, ?, ?, ?)',
    [amount, description, category_id, date, observation],
    (err) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.redirect('/expenses');
    }
  );
});
*/

module.exports = router;