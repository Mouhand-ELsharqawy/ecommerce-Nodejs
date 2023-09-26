const DeliveryModel = require('../models/DeliveryModel')
const CustomerModel = require('../models/CustomerModel')
const OrderModel = require('../models/OrderModel')


exports.getAll = async (req,res) =>{
    try{
        const deliveries = await DeliveryModel.find().populate("CustomerId").populate("OrderId")
        // .populate("OrderId.ProductId")
        res.status(200).json(deliveries)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) =>{
    try{
        const customer = await CustomerModel.findOne({ PhoneNumber: req.body.phone })
        const customerid = customer._id
        const order = await OrderModel.findOne({ CustomerId: customerid })
        const orderid = order._id

        const delivery = await DeliveryModel.create({
            CustomerId: customerid,
            DeliveryDate: req.body.date,
            OrderId: orderid,
            DeliveryManName: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            DeliveryManAddress: {
               Square: req.body.square,
               Street: req.body.street,
               Building: req.body.building,
               Appartment: req.body.appartment 
            },
            DeliveryManNationalId: req.body.national,
            DeliveryManPhone: req.body.phone,
            DeliveryManWhatsUp: req.body.whatsup,
            VehicaleNumber: req.body.number,
            VehicaleChars: req.body.chars
        })
        res.status(200).json(delivery)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.findOne = async (req,res) =>{
    try{
        const delivery = await DeliveryModel.findById(req.params.id)
        .populate("CustomerId")
        .populate("OrderId")
        res.status(200).json(delivery)
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

        const delivery = await DeliveryModel.findByIdAndUpdate(req.params.id,{
            CustomerId: customerid,
            DeliveryDate: req.body.date,
            OrderId: orderid,
            DeliveryManName: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            DeliveryManAddress: {
               Square: req.body.square,
               Street: req.body.street,
               Building: req.body.building,
               Appartment: req.body.appartment 
            },
            DeliveryManNationalId: req.body.national,
            DeliveryManPhone: req.body.deliveryphone,
            DeliveryManWhatsUp: req.body.whatsup,
            VehicaleNumber: req.body.number,
            VehicaleChars: req.body.chars
        },{
            new: true
        })

        res.status(200).json(delivery)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await DeliveryModel.findByIdAndRemove(req.params.id)
        res.status(200).json('Delivery Deleted ')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}