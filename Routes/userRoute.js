var express = require("express");
const { handleUserSignup } = require("../Controller/UserController");
var router = express.Router();

router.post('/signup',handleUserSignup);

module.exports = router;