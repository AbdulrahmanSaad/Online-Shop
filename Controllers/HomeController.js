const productsModel = require('../Models/ProductsModel')

exports.getHome = (req, res, next) => {
    // get products
    // render Index.ejs
    productsModel.getAllProducts().then(products => {
        res.render('Index', {
            products
        })
    })
}