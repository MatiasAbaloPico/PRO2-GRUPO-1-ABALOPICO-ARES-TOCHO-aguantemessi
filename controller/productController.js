const { Association, Op } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
  product: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        { association: "usuario" },
        { association: "comentarios", include: [{ association: "usuarios" }] }
      ]
    };
    db.Producto.findByPk(id, filtrado)
      .then((result) => {
        //console.log('Producto devuelto', result);
        return res.render("product", { datos: result })
      }).catch((err) => {
        console.log(err);
      });
  },
  searchResults: function (req, res, next) {

    //console.log(req)
    let buscado = req.query.search
    db.Producto.findAll({
      where: {
        [Op.or]: {
          nombreProducto: { [Op.like]: `%${buscado}%` },
          descripcion: { [Op.like]: `%${buscado}%` }
        }
      },
      include: [
        { association: "comentarios" },
        { association: "usuario" },
      ],
      order: [["createdAt", "DESC"]],
    })
      .then((result) => {
        //console.log(result.map(x => x.get({ plain: true })))
        return res.render("search-results", { productos: result.map(x => x.get({ plain: true })) })
      }).catch((err) => {
        console.log(err);
      });
  },
  productAdd: function (req, res, next) {
    if (req.session.user == undefined){
      return res.redirect("/login")
    } else {
    res.render("product-add");
    }
  },
  comentario: function(req, res, next){
    let errors = validationResult(req); // acá tenemos los mensajes de errores
    let datosComentario = req.body

    if (req.session.user != undefined) {
      if (errors.isEmpty()){
        let idUsuario = req.session.user.id
        let idProducto = req.params.id
        let comentario = {
          idPost: idProducto,
          idUsuario: idUsuario,
          textoComentario: datosComentario.comentario,
        }
        db.Comentario.create(comentario)
        .then ((result) => {
          return res.redirect("product/${idProducto}")
        }).catch((err) => {
          console.log(err)
        })

      } else {
          res.send(errors)
        //res.redirect("product/${id}", {
        //  errors: errors.array(),
        //  old: req.body
        //}) // acá hay que hacer el redirect a product con los mensajes de error
      }
    } else {
      res.render("login")
    }
  },
  almacenar: function(req, res, next) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let form = req.body;
      let product = {
        idUsuario: req.session.user.id,
        nombreProducto: form.prod,
        descripcion: form.desc,
        imagenProducto: form.img,
      }
      db.Producto.create(product)
          .then(function (result) {
           return res.redirect("/")
         })
          .catch(function (err) {
           return console.log(err);
         })
    } else {
      res.render("product-add", {
        errors: errors.array(),
        old: req.body
      });
    }
  },
  productEdit: function (req, res, next) {
    let id = req.params.id
    let filtrado = {
      include: [
        { association: "usuario" },
        { association: "comentarios", include: [{ association: "usuarios" }] }
      ]
    };
    db.Producto.findByPk(id, filtrado)
      .then((result) => {
        res.render("product-edit", { datos: result });
      }).catch((err) => {
        console.log(err);
      });

  },
  productDelete: function (req, res, next) {

    console.log(req.params)
    // Primero hay que borrar los comentarios y despues el producto
    if (req.params.id) {

      db.Producto.findByPk(req.params.id)
        .then((result) => {

          db.Comentario.destroy({
            where: {
              idPost: req.params.id,
            },
          }).then((result) => {
            db.Producto.destroy({
              where: {
                id: req.params.id,
              },
            }).then((result) => {
              res.redirect("/");
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          console.log(err);
        });

    }
  },
}

module.exports = productController;

/* product add, product y search results */