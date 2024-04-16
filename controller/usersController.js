var datos = require("../db/datos");
const usersController ={
    profile: function(req, res, next) {
        res.render('profile', { title: 'Express' },
        res.render("profile", {datos: datos}));
      },
      profileEdit: function(req, res, next) {
        res.render('profile-edit', { title: 'Express' },
        res.render("profile-edit", {datos: datos}));
      },
  }
  
  module.exports = usersController;

  
  /* profile y profile-edit */