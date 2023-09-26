const ProductController = require('../controllers/ProductController')
const express = require('express')
const router = express.Router()

router.get('/product', ProductController.getAll)
router.post('/product', ProductController.create)
router.get('/product/:id', ProductController.findOne)
router.patch('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.delete)

module.exports = router