const express= require('express')
const upload = require('../middleware/fileupload')
const userModel=require("../model/user_model")

const router=express.Router()

router.post("/upload",upload.single
    ('profile'),async(req,res)=>{
    const fileName=req.file.filename;
    try {
        const {name,email}=req.body;
        const newUser= new userModel({name,email,profile:fileName})
        const resp =await newUser.save()
        console.log(resp);
        res.send("image upload")

    } catch (error) {
        console.log(error);
        res.send('errorouccerd')
        
    }
})

module.exports=router