var datos = require("../db/datos");
const db = require("../database/models")

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
    db.Usuario.create(form )
    .then(function (result) {

    })
    .catch(function (err) {
        return console.log(err);
      })

    return res.redirect("/")
  },
}

module.exports = indexController;

/* index, login y register */