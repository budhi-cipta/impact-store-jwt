const Users = require('../models/Users');
const User = require('../../exp-mongoose/Models/Users');


module.exports = {
    getAllUser : (req, res) => {
        Users.find()
        .then(result => {
            res.send({
                message:"get all data",
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "failed"
            })
        })
    },
    addOneUser: (req, res) => {
        const {fullname,username,email,phone,password,address} = req.body
        Users.create({
            fullname,
            username,
            email,
            phone,
            password,
            address
        },(error, result) => {
            if(error){
                res.status(400).json({
                    message:"error"
                })
            }else{
                res.status(200).json({
                    message:"success add user",
                    result
                })
            }
        })
    },
    updateUser : async (req, res) => {
        try{
           
            const {fullname,username,email,phone,password,address} = req.body
            const updateUser = await Users.findOneAndUpdate({_id: req.params.id}, {...req.body})
        
            if(updateUser){
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
    deleteUser : async (req,res) => {
        try{
            const {fullname,username,email,phone,password,address} = req.body
            const deleteuser = await Users.findOneAndDelete({_id:req.params.id})
            
            if(deleteuser){
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
    login: async(req, res) => {
        try{
            const registerUser = await Users.findone({email:req.body.email})
            if(registerUser.password === req.body.password){
                const dataUser = {
                    id:registerUser._id,
                    username:registerUser.username,
                    email:registerUser.email
                }
                const token = createToken(dataUser)
                console.log(token)

                res.status(200).json({
                    message:'selamat datang',
                    token,
                    user:dataUser
                })
            }else{
                res.status(400).json({
                    message: "Password Salah"
                })
            }
        }
        catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}