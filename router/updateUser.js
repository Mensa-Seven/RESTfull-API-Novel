const express = require('express')
const router = express()
const Profile = require('../models/Profile')
const bcrypt = require('bcrypt')

router.put('/update/:id', async(req, res) => {

    try{
        Profile.findById({_id:req.params.id}, async(err, data) => {

            if(data){

                //auth
                if(req.body.username === data.username){
                    try{
                        // update form body 
                        const updateUser = await Profile.findByIdAndUpdate({_id:data._id}, 
                            {
                            
                                $set:req.body,
                            },
                            {
                                $new:true
                            }
                            )
                        res.status(200)
                        .json(updateUser)
                        //return object all 
    
                    }catch(err){
                        res.status(404)
                        .json(err)
                    }

                }else{
                    res.status(401)
                    .json('you can update you profile only')
                }
                
            }
        })


    }catch(err){
        res.status(400)
        .json(err)
    }

})

module.exports = router