const express = require('express')
const route = express.Router();

const {
    getAllCart ,
    createOneCart,
    updateCart,
    deleteCart

  
} = require('../controller/Cart')

route.get('/cart', getAllCart )
route.post('/cart', createOneCart)
route.put('/cart/:id', updateCart )
route.delete('/cart/:id', deleteCart )

module.exports = route