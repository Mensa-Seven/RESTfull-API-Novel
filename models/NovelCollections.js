const mongoose = require('mongoose')

const NovelCollection = new mongoose.Mongoose.Schema({
    title:{
        type:String,
        required:false,
    },
    number:{
        type:Number,
        required:true
    },
    novel:{
        type:String,
        required:true
    }
    
}, {timestamps:true})

module.exports = mongoose.Mongoose.model('NovelSub', NovelCollection)