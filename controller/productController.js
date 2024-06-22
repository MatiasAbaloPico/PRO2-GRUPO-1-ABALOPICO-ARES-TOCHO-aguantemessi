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
    res.render("product-add");
  },
  productSave: function (req, res, next) {

    console.log('productSave body', req.body)

    let form = req.body;
    let product = {
      idUsuario: form.idUsuario,
      nombreProducto: form.nombre,
      descripcion: form.descripcion,
      imagenProducto: form.imagen,
    }

    let errors = validationResult(req);
    if (errors.isEmpty()) {

      if (form.idProducto) {

        product = {
          nombreProducto: form.nombre,
          descripcion: form.descripcion,
        }

        db.Producto.update(
          {
            nombreProducto: form.nombre,
            descripcion: form.descripcion,
          },
          {
            where: {
              id: form.idProducto,
            },
          },
        ).then(function (result) {
          return res.redirect("/");
        })
          .catch(function (err) {
            return console.log(err);
          });
      } else {

        db.Producto.create(product)
          .then(function (result) {
            return res.redirect("/");
          })
          .catch(function (err) {
            return console.log(err);
          })
      }
    } else {

      if (form.idProducto) {

        let filtrado = {
          include: [
            { association: "usuario" },
            { association: "comentarios", include: [{ association: "usuarios" }] }
          ]
        };
        db.Producto.findByPk(form.idProducto, filtrado)
          .then((result) => {
            res.render("product-edit", {
              datos: result,
              errors: errors.array(),
              old: req.body
            });
          }).catch((err) => {
            console.log(err);
          });
      } else {
        res.render("product-add", {
          errors: errors.array(),
          old: req.body
        });
      }

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