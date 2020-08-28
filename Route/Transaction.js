const express = require('express')
const route = express.Router();

const {
    getAllTransaction,
    createOneTransaction,
    updateTransaction
  
} = require('../controller/Transaction')

route.get('/transactions', getAllTransaction)
route.post('/transactions', createOneTransaction)
route.put('/transactions', updateTransaction)

module.exports = route