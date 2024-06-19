var express = require('express');
var router = express.Router();
const usersController = require("../controller/usersController");

/* GET home page. */
router.get('/profile/:id/', usersController.profile);
router.get('/profile-edit', usersController.profileEdit);

module.exports = router;
