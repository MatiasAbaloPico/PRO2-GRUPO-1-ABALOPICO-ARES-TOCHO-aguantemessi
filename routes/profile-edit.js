var express = require('express');
var router = express.Router();
const profileEditController = require("../controller/profile-editController")

/* GET home page. */
router.get('/', profileEditController.index);

module.exports = router;