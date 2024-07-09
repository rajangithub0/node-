const express=require('express');
const UserModel=require('../model/userModel')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken");
const auth = require('../middleware/auth');
const router =express.Router()

router.post("/register",async(req,res)=>{
    try {
        const {name,username,password,email}=req.body;
        if(!name||!username|| !password ||email){
            return res.status(400).send({massage:"enter all details"})
        }
        let user=await UserModel.findOne((email))
        if(user){
            return res.status(400).send({massage:"email is already use"})
        }
        user=await UserModel.findOne((username))
        if(user){
            return res.status(400).send({massage:"user name is already use"})
        }
        const hashPwd=await bcrypt.hash(password,10);
        const newUser=new UserModel({name,email,username,password:hashPwd})
        const resp= await newUser.save();
        return res.status(201).send({massage:"user created successfully"})
    } catch (error) {
        res.status(500).send({massage:"internal error occur",error})
    }
})
router.post('login',async (req,res)=>{
    try {
        const {name,password}=req.body
        if(!email||!password){
            return res.status(400).send({massage:"enter all details"})            
        }               
        let user =await UserModel.findOne(email)
        if(!user){
            return res.status(400).send({message:'This Email Id is not registered with US'})
        }
        // matched password
        const match= await bcrypt.compare(password,user.password);
        if(match){
            const payload= {id:user._id,name:user.name, email:user.email};
            const token= await jwt.sign(payload,process.env.JWT_SECRET);
            return res.status(200).send({message:'Logged In Successfully',token})
        }else{
            return res.status(500).send({message:'Invalid credentials'})
        }
    } catch (error) {
        res.status(500).send({message:'Internal error occured'}) 
    }
})

router.get("/profile",auth,async(req,res)=>{

})

module.exports=router