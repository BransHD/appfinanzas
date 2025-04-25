const { getConnection } = require('../config/db/conexionsqualize');

module.exports = {
  async rendermain(req, res) {
    res.render('layouts/main');
  },
  async renderLogin(req, res) {
    res.render('auth/login', { layout: false });
  },
  async rendercategory(req, res) {
    res.render('categories/category', { layout: false });
  },
};
