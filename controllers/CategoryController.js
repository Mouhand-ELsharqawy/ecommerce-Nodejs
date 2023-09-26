const CategoryModel = require('../models/CatogeryModel')

exports.getAll = async (req,res)=>{
    try{
        const categories = await CategoryModel.find();
        res.status(200).json(categories)
    }catch(error){
        res.status(500).json({ error : error.message })
    }
}

exports.create = async (req,res) => {
    try{
        const category = await CategoryModel.create({
            Name: req.body.name,
            Type: req.body.type,
            SerialNumber: req.body.serialnumber,
            Description: req.body.description,
            Price: req.body.price,
            Quantity: req.body.quantity,
            ExpireDate: req.body.expiredate,
            ComingDate: req.body.comingdate
        })
        res.status(200).json(category)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.fidOne = async (req,res) => {
    try{
        const category = await CategoryModel.findById(req.params.id)
        res.status(200).json(category)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}
exports.update = async (req,res) => {
    try{
        const category = await CategoryModel.findByIdAndUpdate(req.params.id,{
            Name: req.body.name,
            Type: req.body.type,
            SerialNumber: req.body.serialnumber,
            Description: req.body.description,
            Price: req.body.price,
            Quantity: req.body.quantity,
            ExpireDate: req.body.expiedate,
            ComingDate: req.body.comingdate
        },{
            new: true
        })
        res.status(200).json(category)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await CategoryModel.findByIdAndRemove(req.params.id)
        res.status(200).json( 'Category Deleted' )
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}