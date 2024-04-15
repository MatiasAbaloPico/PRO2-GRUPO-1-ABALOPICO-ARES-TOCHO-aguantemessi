
var express = require('express');
var router = express.Router();
const profileController = require("../controller/profileController")

/* GET home page. */
router.get('/', profileController.index);

module.exports = router;