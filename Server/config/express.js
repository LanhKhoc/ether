const express = require('express');
const bodyParser = require('body-parser');

const config = require("./index");

// Routes
const {
    appRoute,
} = require("./routes");

// Middlewares
const {
    Error404,
} = require("./middleware");

module.exports = (app) => {
    // Config for session
    app.set('trust proxy', 1) // trust first proxy

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use("/api", appRoute)

    // app.use(Error404);
}