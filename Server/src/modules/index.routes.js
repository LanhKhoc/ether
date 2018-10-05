const apiRouter = require('express').Router();
const usersRouter = require('./users/users.route.js');

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
