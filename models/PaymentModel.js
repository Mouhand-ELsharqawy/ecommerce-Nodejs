const mongoose = require('mongoose')
const PaymentSchema = require('../schema/PaymentSchema')

const PaymentModel = mongoose.model('Payments',PaymentSchema)

module.exports = PaymentModel