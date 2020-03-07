const express = require('express');
const router = express.Router();
const con = require('../connection');
const uuid = require("uuid");
router.post("/",(req,res)=>{
    console.log("login request!");
    

    
    con.getDb().collection('userProfile').findOne({userName:req.body.userName}).then(user=>{
        if(user){
           // res.send({ status: "User Exists" });

           if(user.password===req.body.password){
               res.send({status:"Login Success"});
           }
           else{
               res.send({status:"Incorrect Password"});
           }
        }
        else{
            
                 res.send({status:"User Not Found"});
                }
            
        
    }).catch(err=>{
        console.log("eerrr",err);
    })

})

module.exports= router;