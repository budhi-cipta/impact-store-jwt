const express = require('express')
const route = express.Router();

const {
    getAllDataProduct,
    addOneProduct,
    updateProduct,
    deleteProduct
  
} = require('../controller/product')

route.get('/products', getAllDataProduct)
route.post('/products', addOneProduct)
route.put('/products/:id', updateProduct)
route.delete('/products/:id', deleteProduct)

module.exports = route