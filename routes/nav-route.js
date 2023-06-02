
const express = require('express')

const navController = require('../controllers/nav-controller')

const router = express.Router()

router.get('/contact', navController.contact)
router.get('/about', navController.about)




module.exports = router