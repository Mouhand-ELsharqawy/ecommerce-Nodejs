const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: 3
    },
    Type: {
        type: String
    },
    SerialNumber: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    Description: {
        type: String
    },
    Price: {
        type: Number
    },
    Quantity: {
        type: Number
    },
    ExpireDate: {
        type: String
    },
    ComingDate: {
        type: String
    }
},{
    timestamps: true
})

module.exports = CategorySchema;