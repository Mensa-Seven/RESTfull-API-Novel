const mongoose = require('mongoose')
const Profile = require('./Profile')

const NovelShema = new mongoose.Schema(
    {
        user:{
            type:String,
            required:false
        },
        title:{
            type:String,
            required:true
        },

        desc:{
            type:String,
            required:true
        },

        photo:{
            type:String,
            default:""
        },

        category:{
            type:String,
            required:true
        }

    }, {timestamps:true}
)


module.exports = mongoose.model('Novel', NovelShema)