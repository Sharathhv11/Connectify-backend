import jwt from "jsonwebtoken";

const auth = (req,res,next)=>{
    try{

        const {authorization} = req.headers;

        const decodedJwt = jwt.verify(authorization.split(" ")[1],process.env.SIGN);

        req.body.userID = decodedJwt.userID;

        next();

    }catch(error){
        res.status(401).send({
            status:"fail",
            message : error.message
        })
    }
}

export default auth;

