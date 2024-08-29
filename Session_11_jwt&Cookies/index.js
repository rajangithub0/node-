const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const authController = require("./routes/userRoute")
const connectDB = require("./config/db")
var cookieParsar = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParsar())//allow to read cookie
app.use(cors())
connectDB();

app.use('/api/auth', authController)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`application is running ${PORT}`));