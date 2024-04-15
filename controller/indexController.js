var datos = require("../db/datos");
const indexController ={
  index: function(req, res, next) {
      res.render('index', { title: 'Express' },
      res.render("index", {datos: datos}));
    },
    product: function(req, res, next) {
      res.render('product', { title: 'Express' },
      res.render("product", {datos: datos}));
    },
    profile: function(req, res, next) {
      res.render('profile', { title: 'Express' },
      res.render("profile", {datos: datos}));
    },
    register: function(req, res, next) {
      res.render('register', { title: 'Express' },
      res.render("register", {datos: datos}));
    },

}

module.exports = indexController;
