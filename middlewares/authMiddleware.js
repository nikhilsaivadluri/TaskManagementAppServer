const jwt = require("jsonwebtoken");
const config = require("../Config/config");


exports.authenticateUser = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")?.[1];
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err){
           res.status(401).send({message:"Authorization information is missing or invalid"});
           return;
        } 
        else 
        next();
        
      });
}