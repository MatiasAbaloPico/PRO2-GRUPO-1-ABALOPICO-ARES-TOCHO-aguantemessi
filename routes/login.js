var datos = require("../db/datos");
var express = require('express');
var router = express.Router();
const loginController = require("../controller/loginController")

/* GET home page. */
router.get('/', loginController.index);

module.exports = router;