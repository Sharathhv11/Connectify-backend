import mongoose, {Schema,model} from "mongoose";

const chatSchema = new Schema({
    chatID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "chats"
    },
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
        
    },
    text : {
        type : String,
        required : true
    },
    read : {
        type : Boolean,
        default : false
    }
},{
    timestamps:true
});


const chatModel = model("message",chatSchema);

export default chatModel;
