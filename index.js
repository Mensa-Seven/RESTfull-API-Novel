const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()


// router
const authRoute = require('./router/auth')

//connect database
mongoose.connect(process.env.DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connect to Mongodb')
})
.catch(err => {
    console.log(err)
})

app.use(express.json())
app.use('/api/auth', authRoute)


app.listen('5000', () => {
    console.log("server runing")
})