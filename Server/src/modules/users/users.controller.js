const { createJWToken } = require('../../utils/auth.util.js');
const { maybeFold } = require('../../utils/FP');
const usersService = require('./users.service');
const usersModel = require('./users.model.js');

const usersController = {
  login(req, res) {
  const { username, password } = req.body
  console.log({username, password})

  usersService.login({ username, password })
    .fork(
      _ => {
        usersModel.close(_ => _)();
        res.status(403).json({ message: 'ERROR!' });
      },
      maybeUser => {
        usersModel.close(_ => _)();
        maybeUser.fold(
          () => res.status(403).json({ message: 'Username / Password incorrect!' }),
          (userInfo) => {
            const token = createJWToken(userInfo);
            res.status(200).json({ token })
          }
        )
      }
    )
  }
}

module.exports = usersController;
