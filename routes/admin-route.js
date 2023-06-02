const express = require('express')

const adminController = require('../controllers/admin-controller')

const router = express.Router()

router.get('/login', adminController.getLogin)

router.get('/register', adminController.getRegister)

router.post('/register', adminController.registerAdmin)

router.post('/login', adminController.confirmAdmin)

router.get('/create', adminController.compose)




module.exports = router