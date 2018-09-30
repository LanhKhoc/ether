'use strict';

/*
 * nodejs-mongoose-socket.io-ejs template
 * Copyright(c) 2018 Tinh Phan <pvtinh1996@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3001;

// Boostrap models
require(config.PATH_MODELS).map(modelName => `${config.PATH_MODELS}/${modelName}`).forEach(require);

// Boostrap routes
require("./config/express")(app);

const listen = () => {
    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    http.listen(port, () => {
        console.log(`App is listening on port: ${port}`);
    });
    // app.listen(port);
}

const connect = () => new Promise((resolve, reject) => {
    mongoose.connect(config.MONGOOSE_DB_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', () => reject('Server can not connect.'));
    db.once('open', resolve);
})

connect()
    .then(listen)
    .catch(er => {
        console.log(er);
        process.exit(1);
    });