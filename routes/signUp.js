const express = require('express');
const router = express.Router();
const con = require('../connection');
const uuid = require("uuid");
router.post("/",(req,res)=>{
    console.log("post request!");
    const newUser={
        userName:req.body.userName,
        password:req.body.password,
        auth_token: uuid.v4(),
    }

    
    con.getDb().collection('userProfile').findOne({userName:req.body.userName}).then(user=>{
        if(user){
            res.send({ status: "User Exists" });
        }
        else{
            con.getDb().collection('userProfile').insertOne(newUser,(err,result)=>{
                if(err){
                   res.send({status:err});
                }
                else{
                 res.send({status:"Registered",token:"testt"});
                }
            })
        }
    }).catch(err=>{
        console.log("eerrr",err);
    })

})

module.exports= router;