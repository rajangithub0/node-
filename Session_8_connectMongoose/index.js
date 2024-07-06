const connectDB = require("./connect");

const UserModel=require('./user_model');

connectDB();

async function insertData(name,email,age){

    try {
        const newUser= new UserModel({name,email,age});
        await newUser.save();
        console.log("data inserted");
         
    } catch (error) {
        console.log(error);
    }
}

insertData("rajan","rajan@gmail.com",18);


async function getAll(){
    try {
        const data= await UserModel.find();
            console.log(data)
     } catch (error) {
     console.log(error);   
    }
}

getAll();


async function getEmail(email){
    try {
        const data= await UserModel.find({email},{name:1,age:1,_id:0});
        console.log(data);
     } catch (error) {
     console.log(error);   
    }
}

getEmail("rajan@gmail.com")


async function updateUser(id,object){
    try {
        const user =await UserModel.findByIdAndUpdate(id,object);
        console.log("user updated",user);        
    } catch (error) {
        console.log(error);
    }
}

updateUser('66822584a87b3fb063e10ee7',{name:"Ekaansh bhanot"})

async function deleteUser(id){
    try {
        await UserModel.findByIdAndDelete(id);
        console.log("user deleted");        
    } catch (error) {
        console.log(error);
    }
}

deleteUser("66878c9576dd50a1f9e1af1f")
