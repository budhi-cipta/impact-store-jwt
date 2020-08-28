const Products = require('../models/Products');
const productImages = require('../models/Product_images');


module.exports = {
    getAllDataProduct: async (req, res) => {
        try {
            const products = await Products.find().populate({path:'image', select:'url_image'})
            if(products){
                res.status(200).json({
                    message:'succes to get all data',
                    products
                })
            }else {
                res.status(400).json({
                    message:"failed to get data"
                })
            }
        }
        catch(error) {
            res.status(500).json({
                message:'internal error'
            })
        }
    },
    addOneProduct: async (req, res) => {
        try{
            const {productname,description,stock,price,} = req.body
            const newProducts = await Products.create({
                productname,
                description,
                stock,
                price
            })
            if(newProducts){
                res.send({
                    message:'succes',
                    newProducts,
                })
            }else{
                res.send({
                    message:'error data'
                })
            }
        }catch (error) {
            console.log(error)
        }
   },
   updateProduct : async (req, res) => {
    try{
       
        const {productname,description,stock,price,} = req.body
        const updateproduct = await Products.findOneAndUpdate({_id: req.params.id}, {...req.body})
    
        if(updateproduct){
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
deleteProduct : async (req,res) => {
    try{
        const {productname,description,stock,price}  = req.body
        const deleteproduct = await Products.findOneAndDelete({_id:req.params.id},{...req.body})
        
        if(deleteproduct){
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
}

