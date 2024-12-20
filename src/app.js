const express = require('express');
const applyMiddleware = require('./middleware');
const routes = require('./routes');

// Creating an Express application
const app = express();

applyMiddleware(app);
app.use(routes);

app.use("/", (_req, res) => {
    res.status(200).json({
        message: 'OK',
    });
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});

module.exports = app;