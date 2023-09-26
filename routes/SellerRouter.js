const SellerController = require('../controllers/SellerController')
const express = require('express')
const router = express.Router()

router.get('/seller', SellerController.getAll)
router.post('/seller', SellerController.create)
router.get('/seller/:id', SellerController.findOne)
router.patch('/seller/:id', SellerController.update)
router.delete('/seller/:id', SellerController.delete)

module.exports = router
