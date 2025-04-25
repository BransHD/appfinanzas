const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const sql = require('mssql');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const session = require('express-session');
const Sequelize = require('sequelize');
const MSSQLStore = require('express-session-sequelize')(session.Store);
const { isLoggedIn } = require('./backend/config/lib/auth');

const { create } = require('express-handlebars');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/charts', express.static(path.join(__dirname, '../node_modules/chart.js/dist')));

require('./backend/config/lib/passport');

app.set('port', process.env.PORT || 4000);

// View engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'frontend', 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main'); //nombre del archivo por defecto que se cargara

// Archivos estáticos
app.use(
  session({
    secret: process.env.KeySession, // Clave utilizada para firmar la cookie de la sesión. Debe ser única y segura.
    resave: false, // Evita guardar la sesión en el store si no ha sido modificada durante la solicitud.
    saveUninitialized: false, // No guarda sesiones que no hayan sido inicializadas (sin datos).
    cookie: {
      maxAge: 43200000, // Duración de la cookie en milisegundos (12 horas). Después de este tiempo, la sesión expira.
    },
    store: new MSSQLStore({
      // Almacena las sesiones en una base de datos SQL Server.
      db: new Sequelize( // Configuración de Sequelize para conectarse a la base de datos.
        process.env.DB_NAME, // Nombre de la base de datos.
        process.env.DB_USER, // Usuario para acceder a la base de datos.
        process.env.DB_PASSWORD, // Contraseña del usuario.
        {
          host: process.env.DB_SERVER, // Servidor de la base de datos.
          dialect: 'mssql', // Especifica que se usa Microsoft SQL Server.
          port: process.env.PORT_DB, // Puerto para conectarse al servidor SQL.
          dialectOptions: {
            options: {
              encrypt: true, // Indica si la conexión debe ser encriptada.
              trustServerCertificate: true, // Si debe confiar en certificados no verificados.
            },
          },
          logging: false, // Desactiva el registro de consultas SQL en la consola.
        }
      ),
      checkExpirationInterval: 15 * 60 * 1000, // Cada 15 minutos (en milisegundos), verifica las sesiones expiradas y las elimina.
      expiration: 24 * 60 * 60 * 1000, // Las sesiones almacenadas expiran después de 24 horas.
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Rutas dinamicas
app.use('/', require('./backend/routes/configuracion'));
app.use('/', require('./backend/routes/categories'));
app.listen(app.get('port'), () => {
  console.log('Server on port', process.env.PORT);
});
