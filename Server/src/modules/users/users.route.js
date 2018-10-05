const usersRouter = require('express').Router();
// const passport = require('passport');
const usersController = require('./users.controller.js');

usersRouter.post('/login', usersController.login);

module.exports = usersRouter;
