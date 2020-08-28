const Product_Image = require('../models/Product_images');
const Products = require('../models/Products')

module.exports = {
    getAllImage: async (req, res) => {
        try{
            const product_image = await Product_Image
            .find({})
            .populate({path:'id_product', select:'productName'})
            if(product_image) {
                res.status(200).json({
                    message: "get all data",
                    product_image
                })
            }else{
                res.status(400).json({
                    message:"failed"
                })
            }
        }
        catch(error){
            res.status(500).json({
                message:"internal server error"
            })
        }
    },
    addOneImage: async(req, res) => {
        try{
            const {id_product,url_image} = req.body
            const product_image = await Product_Image.create({
                id_product,
                url_image
            })
            const image = await Products.findOneAndUpdate(
                {_id:req.body.id_product},
                {$push:{image:product_image._id}},
                {new:true}
            );
            if(image) {
                res.status(200).json({
                    message:"succes add image",
                    image
                })
            }else{
                res.status(400).json({
                    message:"failed"
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}