const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../config/lib/auth');

const controllerrender = require('../controllers/controllerrender');
const controllerconfiguracion = require('../controllers/controllerconfiguracion');

router.get('/', isLoggedIn, controllerrender.rendermain);
router.get('/login', isNotLoggedIn, controllerrender.renderLogin);
router.post('/login', isNotLoggedIn, controllerconfiguracion.postiniciarSesion);


module.exports = router;