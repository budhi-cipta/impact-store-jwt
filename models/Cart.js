const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
    id_user:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    id_product:{
        type:Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
    }
},{timestamps:true})

const Cart = mongoose.model('carts', cartSchema)

module.exports = Cart