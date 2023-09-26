const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    Square: {
        type: String
    },
    Street: {
        type: String
    },
    Villa: {
        type: String
    },
    Building: {
        type: String
    },
    Appartment: {
        type: String
    }
})

const NameSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName:{
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    }
})



const CustomerSchema = new mongoose.Schema({
    Name: NameSchema,
    Address: AddressSchema,
    PhoneNumber: {
        type: String
    },
    Telephone:{
        type: String
    },
    WhatsUp: {
        type: String
    }  
},{
    timestamps: true
})

module.exports = CustomerSchema;