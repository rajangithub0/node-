const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now()
        const data=file.originalname.split('.')
        const fileExt=data.pop();
        const fname=data.pop()
        cb(null,fileExt+'-'+uniqueSuffix+'.'+fileExt)
    }
})

//use upload as a middleware
const upload=multer({storage:storage,
    limits:{
        fileSize:1024*1024*5       //image upload less then 5MB      
    }
})

module.exports=upload