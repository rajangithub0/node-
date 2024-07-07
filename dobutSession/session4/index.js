const read= require('readline-sync');
const connectDB = require("./config/connect");
const { addProduct, getAllProducts, getProductById, getProductByName } = require('./controller/productController');

connectDB();
console.log("Welcome to My Product Application");
console.log(`Enter 1 to add Product, 2 to get ALL, 3 to getById, 4 to getByName,
    5 to getByCategory, 6 to updateProduct, 7 to deleteProduct`);
const input= read.question('Enter your Input from 1-7: ');
switch(Number(input)){
    case 1:
        const name= read.question('Enter Product Name: ');
        const price= read.question('Enter Product Price: ');
        const desc= read.question('Enter Product Description: ');
        const category= read.question('Enter Product Category: ');
        addProduct(name,price,desc,category);
        break;
    case 2:
        getAllProducts(); break;
    case 3:
        const pid= read.question('Enter ProductId: ');
        getProductById(pid);
    case 4:
        const pname= read.question('Enter Product Name: ');
        getProductByName(pname);
    default:
        console.log("Enter Correct Option: ");
}



















// const read =require('readline-sync')
// const connectDatabase = require("./config/connect");
// const { addProduct, getAllProduct } = require('./controller/productController');

// connectDatabase();

// console.log("welcome to my database for produt application");
// console.log(`enter one to add prodcut`);
// const input=read.question(`enter your input one to seven`);
// switch (Number(input) ) {
//     case 1:
//         const name=read.question("enter your product name ");
//         const price=read.question("enter your product price ");
//         const description=read.question("enter your product description ");
//         const category=read.question("enter your product category");
//         addProduct(name,price,description,category);
//         break;
//     case 2:
//         getAllProduct();
//         break;
//     default:
//         console.log("enter correct option");
// }