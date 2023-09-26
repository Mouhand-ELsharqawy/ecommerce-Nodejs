const CustomerModel = require('../models/CustomerModel')

exports.getAll = async (req,res) => {
    try{
        const customers = await CustomerModel.find()
        res.status(200).json(customers)
    }catch(error){
        res.status(500).json({ error : error.message })
    }
}
exports.create = async (req,res) =>{
    try{

        const customer = await CustomerModel.create({
            Name: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            Address: {
                Square: req.body.square,
                Street: req.body.street,
                Villa: req.body.villa,
                Building: req.body.building,
                Appartment: req.body.appartment
            },
            PhoneNumber: req.body.phone,
            Telephone: req.body.telephone,
            WhatsUp: req.body.whatsup
        })

        res.status(200).json(customer)

    }catch(error){
        res.status(500).json({ error : error.message })  
    }
}

exports.findOne = async (req,res) => {
    try{

        const customer = await CustomerModel.findById(req.params.id)
        res.status(200).json(customer)

    }catch(error){
        res.status(500).json({ error : error.message })  
    }
}

exports.update = async (req,res) => {
    try{
        const customer = await CustomerModel.findByIdAndUpdate(req.params.id,{
            Name: {
                FirstName: req.body.firstname,
                MiddleName: req.body.middlename,
                LastName: req.body.lastname
            },
            Address: {
                Square: req.body.square,
                Street: req.body.street,
                Villa: req.body.villa,
                Building: req.body.building,
                Appartment: req.body.appartment
            },
            PhoneNumber: req.body.phone,
            Telephone: req.body.telephone,
            WhatsUp: req.body.whatsup
        },{
            new: true
        })

        res.status(200).json(customer)

    }catch(error){
        res.status(500).json({ error : error.message })  
    }
}

exports.delete = async(req,res) => {
    try{
        await CustomerModel.findByIdAndRemove(req.params.id)
        res.status(200).json('customer Deleted')
    }catch(error){
        res.status(500).json({ error : error.message })  
    }
} 