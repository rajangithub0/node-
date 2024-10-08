const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors') //import cores

dotenv.config() // config of dot env file using for data hidding
const app = express();
app.use(express.json())
app.use(cors())//checking a cors
connectDB();

app.use("/api/user", require('./routes/userRoute'))
const PORT = process.env.PORT;// reading the file in env file
app.listen(PORT, () => console.log(`Application is listen in ${PORT}`));