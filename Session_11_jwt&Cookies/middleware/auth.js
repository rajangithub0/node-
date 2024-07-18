const jwt=require('jsonwebtoken')
async function auth(req,res,next){
    const cookie=req.cookies;
    if(cookie.token){
        const token=cookie.token;
        const user = await jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        next()
    }else{
        res.send("not authorized user to access profile page")
    }
}

// async function auth(req,res,next){
//     //token can come either form cookies or fo=rom http headers
//     //how to get token from http header
//     const token =req.headers.authorization
//     console.log(token);
//     if(!token){
//         return res.send(`not an authorized user`)
//     }else{
//         //decode
//         const ogToken =token.split(" ")[1]
//         const user=await jwt.verify(ogToken,process.env.JWT_SECRET);
//         req.user=user //pass to profile page
//      }
//     next()//you are passing to access the profile page
// }


module.exports=auth;