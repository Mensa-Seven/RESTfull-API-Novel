const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParsers = require('body-parser');
var cors = require('cors')


dotenv.config()


// router
const authRoute = require('./router/auth')
const updateUser = require('./router/updateUser')
const alluserRoute = require('./router/users')
const mynovelRoute = require('./router/myNovel')

//application /Object
app.use(cors())
app.use(bodyParsers.urlencoded({extended:true}))
app.use(bodyParsers.json())

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
app.use('/api/mynovel', mynovelRoute)
app.get('/', (req, res) => {
    res.status(200)
    .json("hello word")
})


app.listen('5000', () => {
    console.log("server runing")
})