const express = require('express');
const router = express.Router();
const controllerRE = require('../controllers/controllerrender');
const controllerCategory = require('../controllers/controllercategory');
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
router.get('/category', controllerRE.rendercategory);
router.get('/Allcategory', controllerCategory.getAllCategories);
router.post('/category', controllerCategory.postcategory);
router.put('/category/:id', controllerCategory.postcategory);
router.delete('/category/:id', controllerCategory.postcategory);
module.exports = router;
