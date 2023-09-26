const CustomerController = require('../controllers/CustomerController')
const express = require('express')
const router = express.Router()

router.get('/customer', CustomerController.getAll)
router.post('/customer', CustomerController.create)
router.get('/customer/:id', CustomerController.findOne)
router.patch('/customer/:id', CustomerController.update)
router.delete('/customer/:id', CustomerController.delete)

module.exports = router