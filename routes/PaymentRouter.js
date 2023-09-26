const PaymentController = require('../controllers/PaymentController')
const express = require('express')
const router = express.Router()

router.get('/payment', PaymentController.getAll)
router.post('/payment', PaymentController.create)
router.get('/payment/:id', PaymentController.find)
router.patch('/payment/:id', PaymentController.update)
router.delete('/payment/:id', PaymentController.delete) 

module.exports = router