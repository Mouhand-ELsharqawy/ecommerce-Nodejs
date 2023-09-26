const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    CategoryId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    TotalPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    ToWho: {
        type: String,
        required: true
    },
    ContactNumber: {
        type: String,
        required: true
    },
    BankAccount: {
        type: String,
        required: true
    },
    PaymentDate: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = PaymentSchema;