const mongoose = require('mongoose')
const CategorySchema = require('../schema/CategorySchema')

const CategoryModel = mongoose.model('Categories', CategorySchema);

module.exports = CategoryModel;