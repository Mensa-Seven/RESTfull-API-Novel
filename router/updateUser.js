const express = require('express')
const router = express()
const Profile = require('../models/Profile')
const bcrypt = require('bcrypt')

router.put('/update/:id', async(req, res) => {

    try{
        Profile.findById({_id:req.params.id}, async(err, data) => {
            
            if(data){
                try{
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


                }catch(err){
                    res.status(400)
                    .json(err)
                }
            }
        })


    }catch(err){
        res.status(400)
        .json(err)
    }

})

module.exports = router