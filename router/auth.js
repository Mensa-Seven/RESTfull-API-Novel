const express = require('express')
const router = express()
const Profile = require('../models/Profile')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const emailValidation = require('email-validator')
const ValidateUser = require('./validation');
//path or router register
router.post('/register', async(req, res) => {
    
    try{
        
        let lengthPass = req.body.password
        let checkEmail = req.body.email
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(req.body.password, salt)

        
        if(lengthPass.length < 8) return res.status(400).json("password less 8")
        if(!emailValidation.validate(checkEmail)) return res.status(400).json("can't read email format")
        
       
        const newUser = new Profile({
            username: req.body.username,
            email: req.body.email,
            password:hash

        })


        const user = await newUser.save()

        obuUser = {
            "id":user._id,
            "username":user.username,
        }

        res.status(201)
        .json(obuUser)
        
    } catch (err) {
        res.status(500)
        .json(err)
    }
})

router.post('/login', async(req ,res) => {
    try{
        Profile.findOne({ username: req.body.username}, async(err ,data) => {
            if(data){
                //validate return boolean
                const validate = bcrypt.compare(req.body.password, data.password)
                if(!validate)return res.status(401).json("Wrong login")
                
                obData = {
                    "id":data._id,
                    "username":data.username,
                    "is_active":data.is_active = true
                }
                res.status(200)
                .json(obData)

            }else{
                res.status(400)
                .json("can't find user")
            }

        })

    }catch(err){

    }
})

router.delete("/delect/:id", async(req, res) => {
    try{

        Profile.findById(req.params.id, async(error ,data) => {
            if(data){
                if(!req.body.password) return res.status(400).json('undefine password')
                const validate  = bcrypt.compare(req.body.password, data.password)
                if(!validate) return res.status(401).json("reject password")
                try{

                    await Profile.findByIdAndDelete({_id:req.params.id})

                    res.status(200)
                    .json("delect compate")

                }catch(err){
                    res.status(400)
                    .json("Wrrog delect user")
                }
              

            }else{
                res.status(401)
                .json("can't found!")
            }
        })

    }catch(err){

    }
})


module.exports = router
