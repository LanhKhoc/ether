const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const verifyJWTToken = function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decodeToken) => {
      if (err || !decodeToken) { reject(err); }
      else { resolve(decodeToken); }
    });
  });
};

const createJWToken = function createJWToken(details = {}) {
  const data = {};

  for ([key, value] of Object.entries(details)) {
    if ((typeof value).toLocaleLowerCase() !== 'function'
        && key.toLocaleLowerCase() !== 'password'
        && key.toLocaleLowerCase() !== 'maxAge'
    ) {
      data[key] = value;
    }
  }

  const maxAge = details.maxAge ? details.maxAge : 3600; // NOTE: 3600s

  return jwt.sign({ data }, JWT_SECRET, { expiresIn: maxAge, algorithm: 'HS256' });
}

module.exports = {
  verifyJWTToken,
  createJWToken
};
