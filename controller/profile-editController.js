var datos = require("../db/datos");
const profileEditController ={
    index: function(req, res, next) {
        res.render('profile-edit', { title: 'Express' },
        res.render("profile-edit", {datos: datos}));
      },
  }
  
  module.exports = profileEditController;