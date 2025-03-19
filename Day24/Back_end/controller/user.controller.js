const { userModel } = require("../models/user.model");
const bcrypt =require("bcrypt");

const signup =async (req,res)=>{
    const {userName,email,password,} = req.body;

    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
        if(err){
            return res.status(400).send({error:err.massage})
        }else{
            const userData =new userModel({userName,email,password:hash});
            await userData.save();

            return res.status(200).send({message:"user registred succesfully",user:userData})
        }
        });
        
    }catch(error){
        return res.status(400).send({error:error.massage});
    }
}

module.exports={
    signup
}