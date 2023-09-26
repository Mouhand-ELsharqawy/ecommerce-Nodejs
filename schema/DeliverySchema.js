const mongoose = require('mongoose')

const DeliveryManAddressSchema = new mongoose.Schema({
    Square: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    Building: {
        type: String,
        required: true
    },
    Appartment: {
        type: String,
        required: true
    }
})

const DeliveryManNameSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    }
})

const DeliverySchema = new mongoose.Schema({
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    },
    DeliveryDate: {
        type: Date
    },
    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EOrders'
    },
    DeliveryManName: DeliveryManNameSchema,
    DeliveryManAddress: DeliveryManAddressSchema,
    DeliveryManNationalId: {
        type: String,
        required: true,
        minLength: 14
    },
    DeliveryManPhone: {
        type: String,
        required: true
    },
    DeliveryManWhatsUp:{
        type: String,
        required: true
    },
    VehicaleNumber: {
        type: String,
        required: true
    },
    VehicaleChars: {
        type: String,
        required: true
    }

},{
    timestamps:true
})

module.exports = DeliverySchema