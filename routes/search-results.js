var datos = require("../db/datos");
var express = require('express');
var router = express.Router();
const searchresultsController = require("../controller/search-resultsController")

/* GET home page. */
router.get('/', searchresultsController.index);

module.exports = router;