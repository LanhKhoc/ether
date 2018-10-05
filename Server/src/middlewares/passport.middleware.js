const LocalStrategy = require('passport-local').Strategy;
const usersService = require('../modules/users/users.service.js');

module.exports = new LocalStrategy((username, password, done) => {
  usersService.login({ username, password })
    .then(userInfo => done(null, userInfo))
    .catch(_ => done(null, false, { message: 'Username / Password incorrect!' }));
});