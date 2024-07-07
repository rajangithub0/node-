const mongoose =require('mongoose')

async function connectDatabase(){
    try {
        await mongoose.connect("mongodb://localhost:27017/productApp")
        console.log("connectdb");
    } catch (error) {
        console.log(error);
    }
}


module.exports=connectDatabase;