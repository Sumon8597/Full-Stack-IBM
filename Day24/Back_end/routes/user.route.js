const express =require("express");
const { signup } = require("../controller/user.controller");


const userRouter =express.Router();

userRouter.post("/register",signup);

module.exports={
    userRouter
}