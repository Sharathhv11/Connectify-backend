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
        required : [true , "password is required"],
        select:false,
        minlength:8
    },
    profile : {
        type : String,
        default:null
    }
},{timestamps : true});



const userModel = mongoose.model("users",user);
export default userModel;