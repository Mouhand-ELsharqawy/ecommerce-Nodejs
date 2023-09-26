const mongoose = require('mongoose')
const SellerSchema = require('../schema/SellerSchema')

const SellerModel = mongoose.model('Sellers', SellerSchema)

module.exports = SellerModel