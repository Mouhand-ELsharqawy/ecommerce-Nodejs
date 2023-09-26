const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema({
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

const AddressSchema = new mongoose.Schema({
    Square: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    Villa: {
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

const SellerSchema = new mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    SupplierName: NameSchema,
    SupplierPhone: {
        type: String,
        required: true
    },
    SupplierWhatsUp: {
        type: String,
        requied: true
    },
    SupplierAddress: AddressSchema,
    SupplierEmail: {
        type: String,
        requied: true
    },
    SupplierFacebook: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = SellerSchema