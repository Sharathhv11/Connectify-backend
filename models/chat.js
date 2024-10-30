import mongoose from "mongoose";


const chatSchema = new mongoose.Schema({
    members : {
        type : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "users"
            }
        ],
        unique:true
    },
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "messages"
    },
    unReadMessages :{
        type:Number,
        default :0
    }
},{timestamps:true});



const chatModel = mongoose.model("chats",chatSchema);


export default chatModel;