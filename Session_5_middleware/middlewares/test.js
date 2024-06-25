function test(req,res,next){
    console.log("test middllware executed")
    next()
}

module.exports=test;