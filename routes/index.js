
var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");
const db = require("../database/models");
const { body } = require("express-validator");

const validaciones = [
    body("mail").notEmpty().isEmail()
    .withMessage("El email ingresado no es válido, vuelve a intentar.")
    .custom(function (value) {
        return db.Usuario.findOne({
            where: { mail: value },
        })
            .then(function (user) {
                if (user) {
                    throw new Error("El mail ingresado ya existe, prueba con otro distinto.")
                }})}),
    body("usuario").notEmpty().withMessage("Debes completar el campo usuario"),
    body("contrasenia").notEmpty().withMessage("Debes completar el campo contraseña")
    .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),
]

/* GET home page. */
router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);

/* POST --> procesamos la info del formulario */
router.post('/register', validaciones ,indexController.almacenar);
router.post("/login", validaciones, indexController.loginUser);
router.post("/logout", indexController.logout)

module.exports = router;
