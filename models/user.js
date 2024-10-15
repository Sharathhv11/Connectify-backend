import mongoose from 'mongoose';


const user = new mongoose.Schema({
    firstname : {
        type : String,
        requird : [true, "First name is required"]
    },
    lastname : {
        type : String,
        required : [true, "lastname is required"]
    },
    email : {
        type : String,
        required : [true ,"email is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true , "password is required"]
    },
    profile : {
        type : String
    }
},{timestamps : true});



const userModel = mongoose.model("users",user);
export default userModel;