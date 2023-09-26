const mongoose = require('mongoose')

const OrderSchema = new  mongoose.Schema({
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers',
        required: true
    },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    Quantiy: {
        type: Number,
        required: true
    },
    TotalPrice:{
        type: Number,
        required: true
    },
    RecipeDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
})

module.exports = OrderSchema;