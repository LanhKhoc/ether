const R = require('ramda');
const Task = require('../../utils/Task');
const Mongo = require('../../base/base.model.js');

const COLLECTION_NAME = 'users';
let UsersModel = Object.assign(Mongo.create(COLLECTION_NAME), {
  login(data) {
    return (
      this.connect()
        .chain(collection => new Task((rej ,res) => collection.findOne(data).then(res).catch(rej).finally(UsersModel.close)))
    );
  }
});

// UsersModel.getAll = function() {
//   return new Promise((resolve, reject) => {
//     this.connect(COLLECTION_NAME)
//       .then((collection) => {
//         collection.find().toArray((err, result) => {
//           if (err) { reject(err); }
//           resolve(result);
//           this.client.close();
//         });
//       })
//       .catch(error => reject(error));
//   });
// }.bind(UsersModel);

module.exports = UsersModel;
