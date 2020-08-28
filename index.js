const express = require('express');
const db = require('./config/db')
const bodyParser = require('body-parser');

const userRouter = require('./Route/User')
const transactionRouter = require('./Route/Transaction')
const productRouter = require('./Route/Products')
const imageRouter = require('./Route/Product_images')
const cartRouter = require('./Route/Cart')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})
app.use('/', userRouter)
app.use('/', transactionRouter)
app.use('/', productRouter)
app.use('/', imageRouter)
app.use('/', cartRouter)



db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));


app.listen(4000, ()=> {
    console.log('connected')
})

