var datos = require("../db/datos");
const profileController ={
    index: function(req, res, next) {
        res.render('profile', { title: 'Express' },
        res.render("profile", {datos: datos}));
      },
  }
  
  module.exports = profileController;