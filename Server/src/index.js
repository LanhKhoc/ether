const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// const passport = require('passport');

const { APP_PORT } = require('./config');

// NOTE: Because NodeJS don't have native Promise
// Thats mean finally() isn't work in here so we use bluebird instead
global.Promise = require('bluebird');

const apiRouter = require('./modules/index.routes.js');
// const passportMiddleware = require('./middlewares/passport.middleware.js');
// passport.use(passportMiddleware);
// app.use(passport.initialize());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

// NOTE: Handle Error NotFound 404
app.use((req, res, next) => {
  res.status(404);
  res.end('The API link wrong!!!');
});

// NOTE: Handle Error UnauthorizedError 401
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token...');
  }
});

app.listen(APP_PORT || 9999, function() {
  console.log(`Listening on ${APP_PORT || 9999}`);
});
