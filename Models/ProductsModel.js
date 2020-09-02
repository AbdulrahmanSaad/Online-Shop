const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/OnlineShop"

const productschema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
})

const Product = mongoose.model('product', productschema)

exports.getAllProducts = () => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL)
            .then(() => {
                return Product.find()
            })
            .then((products) => {
                mongoose.disconnect()
                resolve(products)
            }).catch(err => { reject(err) })
    })
}
