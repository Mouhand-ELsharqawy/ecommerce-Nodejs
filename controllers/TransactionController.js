const CustomerModel = require('../models/CustomerModel')
const DeliveryModel = require('../models/DeliveryModel')
const OrderModel = require('../models/OrderModel')
const PaymentModel = require('../models/PaymentModel')
const ProductModel = require('../models/ProductModel')
const TransactionModel = require('../models/TranactionModel')

exports.getAll = async (req,res) => {
    try{
        const transactions = await TransactionModel.find()
        .populate("CustomerId")
        .populate("OrderId")
        .populate("ProductId")
        .populate("PaymentId")
        .populate("DeliveryId")
        res.status(200).json(transactions)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
} 

exports.create = async (req,res) => {
    try{
        const customer = await CustomerModel.findOne({ PhoneNumber: req.body.phone })
        const customerid = customer._id
        const order = await OrderModel.findOne({ CustomerId: customerid })
        const orderid = order._id
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id
        const categoryid = product.CategoryId._id
        const payment = await PaymentModel.findOne({ CategoryId: categoryid })
        const paymentid = payment._id
        const delivery = await DeliveryModel.findOne({ CustomerId: customerid })
        const deliveryid = delivery._id

        const transaction = await TransactionModel.create({
            CustomerId: customerid,
            OrderId: orderid,
            ProductId: productid, 
            PaymentId: paymentid,
            DeliveryId: deliveryid
        })

        res.status(200).json(transaction)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.findOne = async (req,res) => {
    try{
        const transaction = await TransactionModel.findById(req.params.id)
        .populate("CustomerId")
        .populate("OrderId")
        .populate("ProductId")
        .populate("PaymentId")
        .populate("DeliveryId")
        res.status(200).json(transaction)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{

        const customer = await CustomerModel.findOne({ PhoneNumber: req.body.phone })
        const customerid = customer._id
        const order = await OrderModel.findOne({ CustomerId: customerid })
        const orderid = order._id
        const product = await ProductModel.findOne({ ProductName: req.body.productname })
        const productid = product._id
        const categoryid = product.categroyid
        const payment = await PaymentModel.findOne({ CategoryId: categroyid })
        const paymentid = payment._id
        const delivery = await DeliveryModel.findOne({ CustomerId: customerid })
        const deliveryid = delivery._id

        const transaction = await TransactionModel.findByIdAndUpdate(req.params.id,{
            CustomerId: customerid,
            OrderId: orderid,
            ProductId: productid, 
            PaymentId: paymentid,
            DeliveryId: deliveryid
        },{
            new: true
        })

        res.status(200).json(transaction)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await TransactionModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Transcation Report Deleted')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}