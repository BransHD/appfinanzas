const { getConnection } = require('../config/db/conexionsqlserver');


module.exports = {
    async rendermain(req, res) {
        res.render('layouts/main');
    },
    async renderLogin(req, res) {
        res.render('auth/login', { layout: false });
    },
}