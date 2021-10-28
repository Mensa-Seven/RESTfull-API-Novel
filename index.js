const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()


// router
const authRoute = require('./router/auth')
const updateUser = require('./router/updateUser')
const alluserRoute = require('./router/users')
//application Object
app.use(express.json())
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



app.use('/api/auth', authRoute)
app.use('/api/user', updateUser)
app.use('/api/user', alluserRoute)



app.listen('5000', () => {
    console.log("server runing")
})