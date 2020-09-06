const authController = require('../Controllers/AuthController')
const router = require('express').Router()
const bodyParser = require('body-parser')

// router.get('/signup',authController.getSignup)

router.post(
    '/signup',
    bodyParser.urlencoded({extended: true}),
    authController.postSignup
    )

router.post(
    '/login', 
    bodyParser.urlencoded({extended: true}),
    authController.postLogin)

module.exports = router