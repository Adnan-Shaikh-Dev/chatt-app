const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');
const messageRoute = require("./Routes/messageRoute");
require('dotenv').config();

app.use(express.json())
app.use(cors())
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

app.get('/',(req,res)=>{
    res.send("Welcome to our chat app api")
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


app.listen(port, (req,res)=>{
    console.log(`Server running on port : ${port}`)
})

mongoose.connect(uri).then(()=>{
    console.log('Database connection established')
}).catch((err)=> console.log("Database connection failed: ",err.message))