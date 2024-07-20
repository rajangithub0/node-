const mongoose=require('mongoose')

 const  connnectDB=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/insta')
        console.log("connect db");
    } catch (error) {
        console.log("error",error);
    }
}

module.exports=connnectDB