const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const authController = require('./routes/user.route');
const connectDB = require('./config/db');

const app = express();
app.use(express.json())
connectDB();

app.use('/api/auth', authController)
//app.use('/api/auth', require('./routes/user.route'))//one way to redriect the route

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`application is running on ${PORT}`))