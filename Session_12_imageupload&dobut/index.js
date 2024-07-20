const express=require("express");
const upload = require("./middleware/fileupload");
const connnectDB = require("./config/db");
const app=express();
connnectDB();

app.use(express.json())
app.use('/profiles',express.static("uploads"))
app.use("/api/user",require('./routes/userRoutes'))
// app.post("/upload",upload.single('profile'),(req,res)=>{
//     console.log(req.file);
//     res.send("image upload successfully")
// })

app.listen(5000,()=>{
    console.log("application started on port 5000");
})