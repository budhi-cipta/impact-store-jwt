const express = require('express')
const route = express.Router();

const {
    getAllUser ,
    addOneUser,
    updateUser,
    deleteUser 
  
} = require('../controller/User')

route.get('/users', getAllUser )
route.post('/users', addOneUser)
route.put('/users/:id', updateUser )
route.delete('/users/:id', deleteUser )

module.exports = route