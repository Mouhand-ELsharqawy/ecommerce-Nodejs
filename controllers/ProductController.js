const CategoryModel = require('../models/CatogeryModel')
const ProductModel = require('../models/ProductModel')

exports.getAll = async (req,res) =>{
    try{
        const products = await ProductModel.find().populate("CategoryId")
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{ 
        const category = await CategoryModel.findOne({ Name: req.body.category })
        const categoryid = category._id

        const product = await ProductModel.create({
           CategoryId: categoryid,
           ProductName: req.body.productname,
            Description: req.body.description,
            Price: req.body.price,
            Quantity: req.body.quantity,
            SerialNumber: req.body.number,
            ExpireDate: req.body.expiredate,
            CompanyName: req.body.companyname,
            CompanyEmail: req.body.email,
            Companyphone: req.body.phone,
            CompanyAddress: {
                Square: req.body.square,
                Street: req.body.street,
                Building: req.body.building,
                floor: req.body.floor
            },
            RecievingDate: req.body.recivingdate
        })

        res.status(200).json(product)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.findOne = async (req,res) => {
    try{
        const product = await ProductModel.findById(req.params.id).populate("CategoryId")
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}
exports.update = async (req,res) => {
    try{
        const category = await CategoryModel.findOne({ Name: req.body.category })
        const categoryid = category._id
        const product = await ProductModel.findByIdAndUpdate(req.params.id,{
            CategoryId: categoryid,
            ProductName: req.body.productname,
             Description: req.body.description,
             Price: req.body.price,
             Quantity: req.body.quantity,
             SerialNumber: req.body.number,
             ExpireDate: req.body.expiredate,
             CompanyName: req.body.companyname,
             CompanyEmail: req.body.email,
             Companyphone: req.body.phone,
             CompanyAddress: {
                 Square: req.body.square,
                 Street: req.body.street,
                 Building: req.body.building,
                 floor: req.body.floor
             },
             RecievingDate: req.body.recivingdate
        },{
            new: true
        })
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{ 
        await ProductModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Product Deleted')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}