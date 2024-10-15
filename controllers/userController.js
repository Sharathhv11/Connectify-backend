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
        res.send({
            status:"failed",
            message : error.message
        })
    }
  
}


export {userDetails};