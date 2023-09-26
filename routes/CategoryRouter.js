const CategoryController = require('../controllers/CategoryController')
const express = require('express')
const router = express.Router()

router.get('/category' ,CategoryController.getAll)
router.post('/category', CategoryController.create)
router.get('/category/:id', CategoryController.fidOne)
router.patch('/category/:id', CategoryController.update)
router.delete('/category/:id', CategoryController.delete)

module.exports = router
