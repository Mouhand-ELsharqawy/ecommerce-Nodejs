const ProductModel = require('../models/ProductModel')
const SellerModel = require('../models/SellerModel')

exports.getAll = async (req,res) => {
    try{
        const sellers = await SellerModel.find().populate("ProductId")
        res.status(200).json(sellers)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{ 
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id

        const seller = await SellerModel.create({
            ProductId: productid,
            SupplierName: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            SupplierPhone: req.body.phone,
            SupplierWhatsUp: req.body.whatsup,
            SupplierAddress: {
                Square: req.body.square,
                Street: req.body.street,
                Villa: req.body.villa,
                Building: req.body.building,
                Appartment: req.body.appartment
            },
            SupplierEmail: req.body.email,
            SupplierFacebook: req.body.facebook
        })
        res.status(200).json(seller)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.findOne = async(req,res) =>{ 
    try{
        const seller = await SellerModel.findById(req.params.id).populate("ProductId")
        res.status(200).json(seller)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id
        const seller = await SellerModel.findByIdAndUpdate(req.params.id,{
            ProductId: productid,
            SupplierName: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            SupplierPhone: req.body.phone,
            SupplierWhatsUp: req.body.whatsup,
            SupplierAddress: {
                Square: req.body.square,
                Street: req.body.street,
                Villa: req.body.villa,
                Building: req.body.building,
                Appartment: req.body.appartment
            },
            SupplierEmail: req.body.email,
            SupplierFacebook: req.body.facebook
        },{
            new:true
        })

        res.status(200).json(seller)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{

        await SellerModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Seller Deleted ')
         
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}