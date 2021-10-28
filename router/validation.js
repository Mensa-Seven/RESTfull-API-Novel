const Profile = require('../models/Profile')
const bcrypt = require('bcrypt')

const ValidateUser = (req, user) => {
    Profile.findById(user._id, async(error, data) => {
        if(data){
            try{
                const validate = bcrypt.compare(req.body.password, data.password)
                if(validate) {
                    return true
                }else{
                    return false
                } 
            }catch{
                return false
            }
        }
    })
}

module.exports = ValidateUser