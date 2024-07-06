const mongoose =require("mongoose")

async function connectDB(){

    try {
        await mongoose.connect('mongodb://localhost:27017/skillacademy');
        //await mongoose.connect('url connect with mongodb altes')
        console.log("Connect DB");
    } catch (error) {
        console.log("error",error);
    }
}

module.exports=connectDB
// mongoose.connect('mongodb://localhost:27017/skillacademy')
// .then(resp=>console.log("connectDb"))
// .catch(err=>console.log("error",err))