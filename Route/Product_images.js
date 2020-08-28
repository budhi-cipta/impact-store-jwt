const express = require('express')
const route = express.Router();

const {
    getAllImage,
    addOneImage
  
} = require('../controller/Product_images')

route.get('/images', getAllImage)
route.post('/images', addOneImage)

module.exports = route