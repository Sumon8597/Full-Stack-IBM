const express = require('express');
const userRouter = require('./routes/user.route');

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">Welcome to our backend ..!!`)
});

app.use(userRouter)



const PORT =8090;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});