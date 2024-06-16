var datos = require("../db/datos");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");

const indexController = {
  index: function (req, res, next) {

    db.Producto.findAll()
      .then(function (datos) {
        return res.render("index", { datos: datos })
      }).catch(function (err) {
        return console.log(err);
      });
  },
  register: function (req, res, next) {
    res.render("register", { datos: datos });
  },
  login: function (req, res, next) {
    res.render("login", { datos: datos });
  },
  almacenar: function(req, res){
    let form = req.body; /* <----- acá guardamos la información del formulario */
    req.session.datosForm = form

    let registracion = {
      mail: form.mail,
      usuario: form.usuario,
      nombre: form.nombre,
      apellido: form.apellido,
      contrasenia: bcryptjs.hashSync(form.contrasenia, 10), /* <---- acá voy a tener que hacer hash */
      fechaNacimiento: form.fechaNacimiento,
      dni: form.dni,
      foto: form.foto,
    }
    
    
    
    db.Usuario.create(registracion)
    .then(function (result) {
      return res.redirect("/")
    })
    .catch(function (err) {
        return console.log(err);
      })
      
    
  },
}

module.exports = indexController;

/* index, login y register */