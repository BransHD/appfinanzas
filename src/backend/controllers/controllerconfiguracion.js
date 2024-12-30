const { getConnection } = require('../config/db/conexionsqlserver');
const passport = require('passport');
//const helpers = require('../config/utils/helpers');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');


module.exports = {
    async postiniciarSesion(req, res, next) {
        passport.authenticate('local.iniciarsesion', (err, user, info) => {
            if (err) {
                // Ocurrió un error durante la autenticación
                return next(err);
            }
            if (!user) {
                // La autenticación falló, envía un JSON al frontend
                return res.json('error');
            }
            // Autenticación exitosa, inicia sesión en el objeto de solicitud
            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    },

    async CerrarSesion(req, res) {
        req.logout(function (err) {
            if (err) {
                console.error(err);
            }
            res.redirect('/iniciarsesion');
        });
    },


}