const express= require('express')
const dotenv=require('dotenv')
dotenv.config();
const authController=require("./routes/userRoute")
const connectDB=require("./config/db")
var cookieParsar=require('cookie-parser')

const app=express();
app.use(express.json());
app.use(cookieParsar())//allow to read cookie
connectDB();

app.use('/api/auth',authController)

const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`applicationis running${PORT}`));