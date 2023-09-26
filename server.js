require('dotenv').config()
const CategoryRouter = require('./routes/CategoryRouter')
const CustomerRouter = require('./routes/CustomerRouter')
const DeliveryRouter = require('./routes/DeliveryRouter')
const OrderRouter = require('./routes/OrderRouter')
const PaymentRouter = require('./routes/PaymentRouter')
const ProductRouter = require('./routes/ProductRouter')
const SellerRouter = require('./routes/SellerRouter')
const TransactionRouter = require('./routes/TransactionRouter')
const express = require('express')
// const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
// app.use(cors)
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api', CategoryRouter)
app.use('/api', CustomerRouter)
app.use('/api', DeliveryRouter)
app.use('/api', OrderRouter)
app.use('/api', PaymentRouter)
app.use('/api', ProductRouter)
app.use('/api', SellerRouter)
app.use('/api', TransactionRouter)


mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(' Database Connected')
        console.log(' Server started in port '+ process.env.PORT)
    })
}).catch(error => {
    console.log({ error: error.message})
})

