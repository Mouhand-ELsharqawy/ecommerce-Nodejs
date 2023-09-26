const mongoose = require('mongoose')



const CompanyAddressSchema = new mongoose.Schema({
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
    floor: {
        type: String
    }
})

const ProductSchema = new mongoose.Schema({
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    ProductName:{
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    SerialNumber:{
        type: String,
        required: true
    },
    ExpireDate: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String,
        required: true
    },
    CompanyEmail: {
        type: String,
        required: true
    },
    Companyphone: {
        type: String,
        required: true
    },
    CompanyAddress: CompanyAddressSchema,
    RecievingDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
})

module.exports = ProductSchema;