const mongoose = require('mongoose')
const ProductSchema = require('../schema/ProductSchema')

const ProductModel = mongoose.model('Products', ProductSchema)

module.exports = ProductModel