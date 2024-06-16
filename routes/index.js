
var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");
const { body } = require("express-validator");
const validaciones = [
    body("mail").isEmail().withMessage("El email ingresado no es válido, vuelve a intentar."),
    body("usuario").notEmpty().withMessage("Debes completar el campo usuario"),
    body("contrasenia").notEmpty().withMessage("Debes completar el campo contraseña"),
]

/* GET home page. */
router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);

/* POST --> procesamos la info del formulario */
router.post('/register', validaciones ,indexController.almacenar);



module.exports = router;
