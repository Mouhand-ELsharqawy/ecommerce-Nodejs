const CustomerModel = require('../models/CustomerModel')
const OrderModel = require('../models/OrderModel')
const ProductModel = require('../models/ProductModel')

exports.getAll = async (req,res) => {
    try{
        const orders = await OrderModel.find().populate("CustomerId").populate("ProductId")
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{
        const customer = await CustomerModel.findOne({ PhoneNumber: req.body.phone })
        const customerid = customer._id
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id

        const order = await OrderModel.create({
            CustomerId: customerid,
            ProductId: productid,
            Quantiy: req.body.quantity,
            TotalPrice: req.body.price,
            RecipeDate: req.body.recipedate
        })
        res.status(200).json(order)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.findOne = async (req,res) => {
    try{
        const order = await OrderModel.findById(req.params.id)
        .populate("CustomerId")
        .populate("ProductId")
        res.status(200).json(order);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{

        const customer = await CustomerModel.findOne({ PhoneNumber: req.body.phone })
        const customerid = customer._id
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id

        const order = OrderModel.findByIdAndUpdate(req.params.id,{
            CustomerId: customerid,
            ProductId: productid,
            Quantiy: req.body.quantity,
            TotalPrice: req.body.price,
            RecipeDate: req.body.recipedate
        },{
            new: true
        })

        res.status(200).json(order)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await OrderModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Order Deleted')  
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}
