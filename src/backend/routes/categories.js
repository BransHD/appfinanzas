const express = require('express');
const router = express.Router();
//const db = require('../config/database');

/*router.get('/', (req, res) => {
  db.all('SELECT * FROM categories', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.render('categories/index', { categories: rows });
  });
});

router.post('/', (req, res) => {
  const { name, description } = req.body;
  db.run('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description], (err) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.redirect('/categories');
  });
});
*/
module.exports = router;