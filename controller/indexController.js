var datos = require("../db/datos");
const indexController ={
  index: function(req, res, next) {
      res.render('index', { title: 'Express' },
      res.render("index", {datos: datos}));
    },
    register: function(req, res, next) {
      res.render('register', { title: 'Express' },
      res.render("register", {datos: datos}));
    },
    login: function(req, res, next) {
      res.render('login', { title: 'Express' },
      res.render("login", {datos: datos}));
    },
}

module.exports = indexController;
 
/* index, login y register */