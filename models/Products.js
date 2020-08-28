const mongoose = require('mongoose')


const Schema = mongoose.Schema

const productSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Schema.Types.ObjectId,
        ref:'productImages'
    }
},{
    timestamps:true
})

const Products = mongoose.model('products', productSchema)
module.exports = Products