var datos = require("../db/datos");
const db = require("../database/models")
const usersController = {
  profile: function (req, res, next) {

    res.render("profile", { datos: datos });
  },
  profileEdit: function (req, res, next) {

    res.render("profile-edit", { datos: datos });
  },
}

module.exports = usersController;


/* profile y profile-edit */