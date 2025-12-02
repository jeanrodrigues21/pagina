const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files - servindo com prefixo /static/
app.use('/static', express.static(path.join(__dirname, 'static')));

// Debug: log static files path
console.log('Static files path:', path.join(__dirname, 'static'));

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});

module.exports = app;