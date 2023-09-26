const mongoose = require('mongoose')
const TransactionSchema = require('../schema/TransactionSchema')

const TransactionModel = mongoose.model('Transactions', TransactionSchema)

module.exports = TransactionModel