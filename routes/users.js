var express = require('express');
var router = express.Router();
const usersController = require("../controller/usersController");
const { body } = require("express-validator");
const db = require("../database/models");

const validacionesEdit = [
    body("mail").notEmpty().withMessage("El email ingresado no es válido, vuelve a intentar.")
    .isEmail().withMessage("El email ingresado no es válido, vuelve a intentar.")
    .custom(function (value) {
        return db.Usuario.findOne({
            where: { mail: value },
        })
            .then(function (user) {
                if (user) {
                    throw new Error("El mail ingresado ya existe, prueba con otro distinto.")
                }})}),
    body("usuario").notEmpty().withMessage("Debes completar el campo usuario")
    .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres")
    .custom(function (value) {
        return db.Usuario.findOne({
            where: { usuario: value },
        })
            .then(function (user) {
                if (user) {
                    throw new Error("El usuario ingresado ya existe, prueba con otro distinto.")
                }})}),
    body("contrasenia").notEmpty().withMessage("Debes completar el campo contraseña")
    .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),
    body("img").notEmpty().withMessage("Debes completar el campo imagen")
    .isLength({ max: 250 }).withMessage("La imagen debe tener menos de 250 caracteres"),
]

/* GET home page. */
router.get('/profile/:id/', usersController.profile);
router.get('/profile-edit/:id/', usersController.profileEdit);

router.post('/profile-edit', validacionesEdit, usersController.update);

module.exports = router;
