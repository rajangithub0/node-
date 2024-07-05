const mongoose =require("mongoose")

async function connectDB(){

    try {
        // await mongoose.connect('mongodb://localhost:27017/skillacademy');
        await mongoose.connect('mongodb+srv://rajanrana6:fANyS5DZxGbTpiZE@cluster0.ne4pcyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connect DB");
    } catch (error) {
        console.log("error",error);
    }
}

module.exports=connectDB
// mongoose.connect('mongodb://localhost:27017/skillacademy')
// .then(resp=>console.log("connectDb"))
// .catch(err=>console.log("error",err))