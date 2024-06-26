const express=require('express');
const users=require('./users.json')

const app=express(); 
app.use(express.json());
// app.set("views","./myviews") use  for another name of the folder 
app.set("view engine","pug");//template engine files

app.get("/",(req,res)=>{
    // res.send('home page');
    res.render("index");
})

app.get("/massage",(req,res)=>{
    res.render('massage',{title:'skill acamdemy',massage:'good afternoon'});
})

app.get('/users',(req,res)=>{
    res.render('userslist',{users})
})
app.listen(5000,()=>console.log("server stared"));