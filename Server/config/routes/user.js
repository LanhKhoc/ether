const router = require('express').Router();

// Controllers
const {
	userCtrl
} = require("../../app/controllers");

// Middlewares
const {
	auth
} = require("../middleware");

router.get("/login", userCtrl.login);

module.exports = router;