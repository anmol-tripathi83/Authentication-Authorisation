var express = require("express");
const { handleUserSignup, handleUserLogin, getDetails } = require("../Controller/UserController");
const verify = require("../Middleware/verifyMiddleware");
var router = express.Router();

// http://localhost:5002/api/v1/user/signup
router.post('/signup',handleUserSignup);
// http://localhost:5002/api/v1/user/login
router.post('/login',handleUserLogin);      // now jwt token came into picture
//
router.get('/getDetails', verify , getDetails);

module.exports = router;