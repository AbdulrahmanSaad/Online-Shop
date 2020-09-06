const authModel = require('../Models/AuthModel')
const { use } = require('../Routes/HomeRoute')

exports.getSignup = (req, res, next) => {
    // res.render("signup")
}

exports.postSignup = (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body
    authModel.createNewUser(username, email, password).then(() => {
        res.send("Done")
    }).catch(err => {
        console.log(err)
        res.send("ERRor")
    })
}

exports.getLogin = (req, res, next) => {
    // res.render("Login")
}