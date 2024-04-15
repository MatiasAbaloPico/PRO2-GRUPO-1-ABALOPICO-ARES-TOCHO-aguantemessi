var datos = require("../db/datos");
const indexController ={
  index: function(req, res, next) {
      res.render('index', { title: 'Express' },
      res.render("index", {datos: datos}));
    },
    profile: function(req, res, next) {
      res.render('profile', { title: 'Express' },
      res.render("profile", {datos: datos}));
    },
    register: function(req, res, next) {
      res.render('register', { title: 'Express' },
      res.render("register", {datos: datos}));
    },
    login: function(req, res, next) {
      res.render('login', { title: 'Express' },
      res.render("login", {datos: datos}));
    },
    profileEdit: function(req, res, next) {
      res.render('profile-edit', { title: 'Express' },
      res.render("profile-edit", {datos: datos}));
    },
    searchResults: function(req, res, next) {
      res.render('search-results', { title: 'Express' },
      res.render("search-results", {datos: datos}));
    },

}

module.exports = indexController;
