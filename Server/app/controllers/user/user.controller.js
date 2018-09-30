const mongoose = require("mongoose");
const {
	wrap: async
} = require("co");

const R = require('ramda');
const Maybe = require('../../utils/Maybe');

const User = mongoose.model("User");

const login = async (req, res) => {
	console.log('asdas');
	res.end('123');
}

const register = async (req, res) => {

}

const logout = (req, res) => {

}

module.exports = {
	login,
	register,
	logout
}