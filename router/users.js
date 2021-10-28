const express = require('express')
const router = express()
const Profile = require('../models/Profile')

//get all user
router.get('/', async(req, res) => {
    try{

        const allUser = await Profile.find()
        res.status(200)
        .json(allUser)


    }catch(err){
        res.status(200)
        .json(err)
    }

})

router.get('/me/:id', async(req, res) => {

    try{
        
        //check request body
        if(!req.body.username) return res.status(400).json("please defind username body")

        //check resource user
        Profile.findById({_id:req.params.id}, async(err, data) => {
            if(data){

                if(req.body.username === data.username){
                    res.status(200)
                    .json(data)
                    //reutnr your object profile

                }else{
                    res.status(401)
                    .json("you can get you accuct only")
                }
                
            }else{
                res.status(404)
                .json(err)
            }
        }) 


    }catch(err){
        res.status(400)
        .json(err)
    }
})

module.exports = router