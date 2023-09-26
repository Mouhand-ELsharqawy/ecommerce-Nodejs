const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers',
        required: true
    },
    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EOrders',
        required: true
    },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    PaymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payments',
        required: true
    },
    DeliveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deliveries'
    }
},{
    timestamps: true
})

module.exports = TransactionSchema;