const CategoryModel = require('../models/CatogeryModel')
const PaymentModel = require('../models/PaymentModel')

exports.getAll = async (req,res) => {
    try{
        const payments = await PaymentModel.find().populate("CategoryId")
        res.status(200).json(payments)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{
        const category = await CategoryModel.findOne({ Name: req.body.category })
        const categoryid = category._id
        const payment = await PaymentModel.create({
            CategoryId: categoryid,
            Quantity: req.body.quantity,
            TotalPrice: req.body.totalprice,
            discount: req.body.discount,
            ToWho: req.body.towho,
            ContactNumber: req.body.contact,
            BankAccount: req.body.bankaccount,
            PaymentDate: req.body.payment
        })
        res.status(200).json(payment)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.find = async (req,res) =>{
     try{
        const payment = await PaymentModel.findById(req.params.id).populate("CategoryId")
        res.status(200).json(payment)
     }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{

        const category = await CategoryModel.findOne({ Name: req.body.category })
        const categoryid = category._id

        const payment = await PaymentModel.findByIdAndUpdate(req.params.id,{
            CategoryId: categoryid,
            Quantity: req.body.quantity,
            TotalPrice: req.body.totalprice,
            discount: req.body.discount,
            ToWho: req.body.towho,
            ContactNumber: req.body.contact,
            BankAccount: req.body.bankaccount,
            PaymentDate: req.body.payment
        },{
            new: true
        })

        res.status(200).json(payment)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await PaymentModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Payment Deleted')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}