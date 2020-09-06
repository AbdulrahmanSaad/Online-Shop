const authController = require('../Controllers/AuthController')
const router = require('express').Router()
const bodyParser = require('body-parser')

// router.get('/signup',authController.getSignup)

router.post(
    '/signup',
    bodyParser.urlencoded({extended: true}),
    authController.postSignup
    )

// router.getLogin('/login', authController.getLogin)

module.exports = router