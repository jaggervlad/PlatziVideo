const express = require('express');
const app = express()
const debug = require('debug')('app:server');
const logger = require('morgan');
const cors = require('cors');

const { config } = require('./config/index')
const moviesApi = require('./routes/index');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHanler');

// body parser
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas 
moviesApi(app);

// Cath error 404
app.use(notFoundHandler);

//Middleware - Menejo de Errores
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, function() {
    debug(`Listening http://localhost:${config.port}`);
});