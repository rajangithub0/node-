const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    userName:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    age:{
        type: Number,
        require:true,
        min:18,
        max:65
    },
})

const user=mongoose.model("User",userSchema)

module.exports=user;