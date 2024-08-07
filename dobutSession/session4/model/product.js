const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,require:true},
    category:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const ProductModel=mongoose.model('Product',productSchema);
module.exports=ProductModel;