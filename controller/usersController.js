
const db = require("../database/models")
const { validationResult } = require("express-validator");
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
          if (req.session.user.usuario != result.usuario){
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
  update: function (req, res) {

    let errors = validationResult(req);

    if (errors.isEmpty()) {

      let form = req.body; /* <----- acá guardamos la información del formulario */
      req.session.datosForm = form
      

      let user = {
        mail: form.mail,
        usuario: form.usuario,
        contrasenia: bcryptjs.hashSync(form.contrasenia, 10), /* <---- acá voy a tener que hacer hash */
        foto: form.foto,
      }

      db.Usuario.update(user)
        .then(function (result) {
          return res.redirect("/login")
        })
        .catch(function (err) {
          return console.log(err);
        })

    } else {
      return res.render(res.redirect("/profile-edit/"+req.session.user.id), {errors: errors.array(),
        old: req.body});
      
    }


  },
}

module.exports = usersController;


/* profile y profile-edit */