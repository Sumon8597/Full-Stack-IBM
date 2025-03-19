const express = require('express');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to SVU backend App...!")
});

app.use(userRouter)

const PORT=8090;

app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("DB is connected")
        console.log(`server is running on server http://localhost:${PORT}`);
    }catch(error){
        console.log(error.massage);
    }
});