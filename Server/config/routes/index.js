const appRoute = require('express').Router();

const userRoute = require("./user");

appRoute.use('/user', userRoute);

module.exports = {
    appRoute
};