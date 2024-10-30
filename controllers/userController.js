import userModel from "../models/user.js";

const userDetails = async (req,res) =>{
    try {
        const user = await userModel.findOne({
            _id:req.body.userID
           }).select("-password -__v");
        
          res.send({
            status:"success",
            message : "user fetched successfully",
            data : user
          })
        
    } catch (error) {
        res.status(400).send({
            status:"failed",
            message : error.message
        })
    }
  
}


const getAllUser = async  (req,res)=>{
    try {
        const users = await userModel.find({
        _id:{
            $ne : req.body.userID
        }
        }).select("-__v");

        res.send({
            status:"success",
            message:"users featched successfully",
            data : users
        })
    } catch (error) {
       res.status(400).send({
        status:"failed",
        message:"failed to fetch users"
       }) 
    }
}


export {userDetails,getAllUser};