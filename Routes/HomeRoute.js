const homeController = require('../Controllers/HomeController')
const router = require('express').Router()

router.get('/',homeController.getHome)

module.exports = router