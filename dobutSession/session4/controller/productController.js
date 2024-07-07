const ProductModel = require("../model/product") 
async function addProduct(name,price,description,category){
    try {
        const newProduct= new ProductModel({name,price,description,category});
        const createdProduct=await newProduct.save();
        console.log("product created sucessfully",createdProduct);
    } catch (error) {
        console.log(error);
    }
} 

async function getAllProduct(){
    try {
        const products= await ProductModel.findById();
        console.log(products);      
    } catch (error) {
        console.log(error);
    }
}

async function getProductByName(name){
    try {
        const productName= await ProductModel.find({name})
        console.log(productName);
    } catch (error) {
        console.log(error);
    }
}

async function getProductById(id){
    try {
        const prodcutId=await ProductModel.find({id})
        console.log(prodcutId);
    } catch (error) {
        console.log(error);
    }
}

async function getProdcutByCategory(category){
    try {
        const productCategory= await ProductModel.find({category})
        console.log(productCategory);
    } catch (error) {
        console.log(error);
    }
}

async function updateProduct(id,object){
    try {
        const updateProduct =await prodcutId({id},{name:"microsoft"})
        console.log(updateProduct);
    } catch (error) {
        console.log(error);  
    }
}

async function deleteProduct(id){
    try {
        const deleteProduct = await ProductModel({id})
    } catch (error) {
        console.log(error);  
    }
}

module.exports={
    addProduct,
    getAllProduct,
    getProdcutByCategory,
    getProductById,
    getProductByName,
    updateProduct,
    deleteProduct
}