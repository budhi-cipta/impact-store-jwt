const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productImageSchema = new Schema({
    id_product:{
        type:Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    url_image:{
        type: String,
        required:true
    }
},{timestamps:true})

const productImages = mongoose.model('productImages', productImageSchema)

module.exports = productImages