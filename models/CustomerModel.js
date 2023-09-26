const mongoose = require('mongoose')
const CustomerSchema = require('../schema/CustomerSchema')

const CustomerModel = mongoose.model('Customers', CustomerSchema);

module.exports = CustomerModel;