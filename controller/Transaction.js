const Transaction = require('../models/Transaction')
const Cart = require('../models/Cart')
const Products = require('../models/Products')
const { findOne } = require('../models/Transaction')




module.exports = {
    getAllTransaction : async (req, res) => {
        try{
            const transaction = await Transaction.find({})
            .populate({path:'id_user',select: 'fullname'})
            .populate({path:'id_product', select: 'productname'})
            .populate({path:'id_cart', select:'quantity'})

            if(transaction){
                res.send({
                    message:'get all data',
                    data:transaction
                })
            }else{
                res.status(400).json({
                    message:'failed to get data'
                })
            }
        }
        catch(error) {
            console.log(error);
            res.status(500).json({
                message:'internal server error'
            })
        }
    },
    createOneTransaction: async (req, res) => {
        try{
            const {id_user,id_product,id_cart,status_transaction,total_price} = req.body
            const newTransaction = await Transaction
            .create({
                id_user,id_product,id_cart,status_transaction,total_price
            })
                
            if(newTransaction){
                res.status(200).json({
                    message:'succes add transaction',
                    newTransaction
                })
            }
        }
        catch(error){
            console.log(error)
        }
    },
    updateTransaction : async (req, res) => {
        try{
            const product = await Products.findOne({_id:req.body.id_product})
            let price = await product.price

            const cart = await Cart.findOne({_id:req.body.id_cart})
            let quantity = await cart.quantity

            const cartupdatestatus = await Cart.findOneAndUpdate({_id:req.body.id_cart},{status_cart:false})

            let total_price = await quantity * price;

            const newtransaction = await transaction.create({
                ...req.body,
                total_price:total_price
            })
            if(newtransaction){
                res.status(200).json({
                    message:'succes update'
                })
            }else{
                res.status(400).json({
                    message:'failed'
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

