const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/charts', express.static(path.join(__dirname, 'node_modules/chart.js/dist')));

// View engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'src', 'frontend', 'views')); // Carpeta de vistas correcta
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Ruta csorrecta para el layout

// Routes
app.use('/', require('./backend/routes/dashboard'));
app.use('/categories', require('./backend/routes/categories'));
app.use('/income', require('./backend/routes/income'));
app.use('/expenses', require('./backend/routes/expenses'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});