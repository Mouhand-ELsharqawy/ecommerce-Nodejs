const OrderController = require('../controllers/OrderController')
const express = require('express')
const router = express.Router()

router.get('/order', OrderController.getAll)
router.post('/order', OrderController.create)
router.get('/order/:id', OrderController.findOne)
router.patch('/order/:id', OrderController.update)
router.delete('/order/:id', OrderController.delete)

module.exports = router