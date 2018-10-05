const bcrypt = require('bcrypt');
const Task = require('../../utils/Task');
const { maybeBimap } = require('../../utils/FP');

const usersModel = require('./users.model.js');

const usersService = {
  login({ username, password }) {
    return (
      usersModel.login({ username })
        .chain((user) => {
          return (
            new Task((rej, res) => bcrypt.compare(password, user.password).then(res).catch(rej))
              .map(Maybe.toMaybe)
              .map(maybeBimap(
                () => null,
                _ => ({ username: user.username, email: user.email })
              ))
          )
        })
    );
  }
};

// usersService.login = function(userInfo) {
//   return new Promise((resolve, reject) => {
//     const { username, password } = userInfo;
//     usersModel.login({ username })
//       .then((user) => {
//         bcrypt.compare(password, user.password)
//           .then((res) => {
//             if (res) {
//               resolve({
//                 username: user.username,
//                 email: user.email
//               })
//             } else { reject(); }
//           })
//           .catch(error => reject(error));
//       })
//       .catch(error => reject(error));
//   });
// }

module.exports = usersService;