const path = require('path');
const __DEV__ = require('./env/development');

// config session
var SESSION = {
    secret: "n-e-s-tmp",
    cookie: { maxAge: 60000 }
}

// This is defaults config
const defaults = {
    ROOT: path.join(__dirname, ".."),
    PATH_MODELS: path.join(__dirname, "../app/models"),
    SESSION,
}

const config = {
    development: {
        ...defaults,
        ...__DEV__
    },
}

module.exports = config[process.env.NODE_ENV || 'development'];
