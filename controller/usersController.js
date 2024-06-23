
const db = require("../database/models")
const usersController = {
  profile: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        {association: "productos",}
      ]
    };
    db.Usuario.findByPk(id, filtrado)
      .then((result) => {
        return res.render("profile", { datos: result });
      }).catch((err) => {
        console.log(err);
      });
  },
  profileEdit: function (req, res, next) {
   if (req.session.user == undefined){
     return res.redirect("/login")
   } else {
      let id = req.params.id
      db.Usuario.findByPk(id)
        .then ((result) => {
          if (req.session.user != result.usuario){
            return res.redirect("/")
          }
        })
        .then((result) => {
          return res.render("profile-edit", { datos: result });
        }).catch((err) => {
          console.log(err);
      });
   }
  },
}

module.exports = usersController;


/* profile y profile-edit */