const login =(req,res)=>{
    const data =req.body;

    try{
        if(data){
            return res.status(400).send({massage:"Data not found"});
        }else{
            return res.status(200).send({massage:"User logged in succesfully"});
        }
    }catch(error){
        return res.status(500).send({massage: error.massage});
    }
}

const signup =(req,res)=>{
    const data =req.body;

    try{
        if(data){
            return res.status(400).send({massage:"Data not found"});
        }else{
            return res.status(200).send({massage:"User registered succesfully"});
        }
    }catch(error){
        return res.status(500).send({massage: error.massage});
    }
}

module.exports ={
    login , signup
}