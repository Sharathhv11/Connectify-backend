import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
  try {
    //?verifying that no user exists with same email
    const user = await userModel.findOne({
      email: req.body.email,
    });

    //?if exists send bad requests
    if (user) {
      return res.send({
        status: "fail",
        message: `user already exists with ${req.body.email}`,
      });
    }

    //?if no user exists store userInformation

    const hasedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hasedPassword;

    const newUser = await userModel(req.body);

    await newUser.save();

    return res.send({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};


const logIn = async (req,res)=>{
    try {
        const {email,password} = req.body;

       
        if(!(email && password)){
            throw new Error("email and password required for login");
        }
        
        const user = await userModel.findOne({email});

        if(!user){
            return res.send({
                status:"failed",
                message:"user does't exists"
            })
        }
       
        const isPasswordValid = await bcrypt.compare(password ,user.password);

        if(!isPasswordValid){
            return res.send({
                status:"failed",
                message:"invalid password"
            })
        }

        const token = jwt.sign({
            userID : user._id,
            email
        },process.env.SIGN,{
            expiresIn:"1d"
        });

        res.send({
            status:"success",
            message:"user logged in successfully",
            token 
        })


    } catch (error) {
        res.send({
            status:"failed",
            message:error.message
        })
    }
}






export { signUp,logIn };
