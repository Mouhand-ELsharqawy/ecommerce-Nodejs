const TransactionController = require('../controllers/TransactionController')
const express = require('express')
const router = express.Router()

router.get('/report', TransactionController.getAll)
router.post('/report', TransactionController.create)
router.get('/report/:id', TransactionController.findOne)
router.patch('/report/:id', TransactionController.update)
router.delete('/report/:id', TransactionController.delete)

module.exports = router