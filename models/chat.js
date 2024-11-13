import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    chatIdentifier: {
        type: String,
        unique: true // Set unique constraint on this field
    },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "messages"
    },
    unReadMessages: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Create a unique index to prevent duplicate chats with the same members
chatSchema.index({ members: 1 }, { unique: true });


const chatModel = mongoose.model("chats", chatSchema);

export default chatModel;
