const productController ={
    index: function(req, res, next) {
        res.render('product', { title: 'Express' });
      },
}

module.exports = productController;