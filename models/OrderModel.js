const mongoose = require('mongoose')
const OrderSchema = require('../schema/OrderSchema')

const OrderModel = mongoose.model('EOrders',OrderSchema)

module.exports = OrderModel