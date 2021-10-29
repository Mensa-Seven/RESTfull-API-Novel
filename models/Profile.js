const mongo = require('mongoose')
const Novel = require('./Novel')
const { boolean } = require('webidl-conversions')
//const { start } = require('repl')

const ProfileSchema = new mongo.Schema( {
   
    username: {
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:false
    },
    is_active:{
        type:Boolean,
        default:false
    },
    profilePic:{
        type:String,
        default: ""
    },
    mynovel:{
        type:mongo.Schema.Types.ObjectId,
        ref:"Novel"
    }

}, {timestamps:true} )

module.exports = mongo.model('Profile', ProfileSchema)
