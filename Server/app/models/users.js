const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const { wrap: async } = require("co");

const UserSchema = new Schema({
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    fullname: { type: String, default: '' },
})

/**
 * virtual
 */

 /**
  * Method
  */

/**
 * Statics
 */

mongoose.model('User', UserSchema);
