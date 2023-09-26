const mongoose = require('mongoose')
const DeliverySchema = require('../schema/DeliverySchema')

const DeliveryModel = mongoose.model('Deliveries', DeliverySchema)

module.exports = DeliveryModel