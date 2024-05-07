var datos = require("../db/datos");
const db = require("../database/models")

const indexController ={
  index: function(req, res, next) {
      
    db.Producto.findAll()
    .then(function (result) {
      return res.render("product", {datos: result})
    }).catch(function (err) {
      console.log(err);
    });
    },
    register: function(req, res, next) {
      res.render("register", {datos: datos});
    },
    login: function(req, res, next) {
      res.render("login", {datos: datos});
    },
}

module.exports = indexController;
 
/* index, login y register */