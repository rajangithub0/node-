const express= require('express')
const dotenv=require('dotenv')
dotenv.config();
const authController=require("./routes/userRoute")
const connectDB=require("./config/db")

const app=express();
app.use(express.json());
connectDB();

app.use('/api/auth',authController)

const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`applicationis running${PORT}`));