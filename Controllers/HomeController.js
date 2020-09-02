const productsModel = require('../Models/ProductsModel')

exports.getHome = (req, res, next) => {

    let category = req.query.category

    let validCategories = [
        'clothes',
        'phones',
        'cars'
    ]
    let productsPromise

    if (category && validCategories.includes(category)) {
        console.log(category, "CCCC")
        productsPromise = productsModel.getProductsByCategory(category)
    }
    else {
        console.log(category, "PPPP")
        productsPromise = productsModel.getAllProducts()
    }
    productsPromise.then(products => {
        res.render('Index', {
            products
        })
    })
}