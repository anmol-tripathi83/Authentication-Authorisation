var express = require("express");
const { handleUserSignup, handleUserLogin } = require("../Controller/UserController");
var router = express.Router();

// http://localhost:5002/api/v1/user/signup
router.post('/signup',handleUserSignup);
// http://localhost:5002/api/v1/user/login
router.post('/login',handleUserLogin);      // now jwt token came into picture

module.exports = router;