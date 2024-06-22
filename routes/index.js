
var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");
const db = require("../database/models");
const { body } = require("express-validator");

const validacionesIRegister = [
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
const validacionesILogin = [
    body("mail").notEmpty().isEmail()
    .custom(function (value) {
        return db.Usuario.findOne({
            where: { mail: value },
        })
            .then (function (user) {
                if (!user) {
                    throw new Error("El mail no existe, prueba con otro distinto.")
                }})}),
    body("contrasenia").notEmpty().withMessage("Debes completar el campo contraseña")
    .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres").custom(function (value) {
        return db.Usuario.findOne({
            where: { contrasenia: value },
        })
            .then (function (user) {
                if (!user) {
                    throw new Error("Contraseña erronea")
                }})}),
]
/* GET home page. */
router.get('/', indexController.index);
router.get('/register/', indexController.register);
router.get('/login/', indexController.login);

/* POST --> procesamos la info del formulario */
router.post('/register/', validacionesIRegister ,indexController.almacenar);
router.post("/login/", validacionesILogin, indexController.loginUser);
router.post("/logout/", indexController.logout)

module.exports = router;
