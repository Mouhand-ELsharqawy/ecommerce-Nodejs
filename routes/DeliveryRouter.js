const DeliveryController = require('../controllers/DeliveryController')
const express = require('express')
const router = express.Router()

router.get('/delivery', DeliveryController.getAll)
router.post('/delivery', DeliveryController.create)
router.get('/delivery/:id', DeliveryController.findOne)
router.patch('/delivery/:id', DeliveryController.update)
router.delete('/delivery/:id', DeliveryController.delete)

module.exports = router