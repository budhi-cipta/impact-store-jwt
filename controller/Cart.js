const Cart = require('../models/Cart')
const Transaction = require('../models/Transaction')


module.exports = {
    getAllCart : async (req, res) => {
        try{
            const cart = await Cart.find({})
            .populate({path:'id_user', select:'fullname'})
            .populate({path:'id_product',select:'productName'})

            if(cart){
                res.send({
                    message:'get all data',
                    data: cart
                })
            }else{
                res.status(400).json({
                    message:'failed to get data'
                })
            }
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                message:'internal server error'
            })
        }
    },
    createOneCart: async(req, res) => {
        try{
            const{id_user,id_product,quantity,status} = req.body
            const newCart = await Cart
            .create({
                id_user,id_product,quantity,status,
            })
        
            if(newCart){
                res.status(200).json({
                    message:'succes add cart',
                    newCart
                })
            }else{
                res.status(400).json({
                    message:'failed'
                })
            }
        }
        catch(error){
            console.log(error)
        }
    },
    updateCart : async (req, res) => {
        try{
           
            const {id_user,id_product,quantity,status} = req.body
            const updatecart = await Cart.findOneAndUpdate({_id: req.params.id}, {...req.body})
        
            if(updatecart){
                res.status(200).json({
                    message:'succes'
                })
            } else {
                res.status(400).json({
                    message: 'failed'
                })
            }
        }
        catch(error){
            console.log(error)
        }
    },
    deleteCart : async (req,res) => {
        try{
            const {id_user,id_product,quantity,status} = req.body
            const deletecart = await Cart.findOneAndDelete({_id:req.params.id},{...req.body})
            
            if(deletecart){
                res.status(200).json({
                    message:'succes'
                })
            } else {
                res.status(400).json({
                    message: 'failed'
                })
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
}