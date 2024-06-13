
var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

/* GET home page. */
router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);

/* POST --> procesamos la info del formulario */
router.post('/register', indexController.almacenar);



module.exports = router;
