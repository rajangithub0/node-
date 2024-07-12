const bcrpyt=require('bcrypt');

async function converts(){
    const myPassword ="1234567";
    const hashPassword = await bcrpyt.hash(myPassword,10);
    console.log("orignal password",myPassword)
    console.log("hashpassword", hashPassword)
    //how to compair them 
    const match= await bcrpyt.compare(myPassword,hashPassword);
     if(match){
        console.log("password match");
    }else{
        console.log("password mismatched");
    }
}
converts()