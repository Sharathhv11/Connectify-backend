import chatModel from "../models/chat.js";
import messageModel  from "../models/message.js";

const newChat = async (req, res) => {
  try {
    let { members } = req.body;



    // Sort member IDs to ensure consistent ordering
    const sortedMembers = [...members].sort();

    // Create a unique identifier by joining the sorted member IDs
    const chatIdentifier = sortedMembers.join("_");

    // Check if a chat with this identifier already exists
    const existingChat = await chatModel
      .findOne({ chatIdentifier })
      .populate("members");

    if (existingChat) {
      return res.status(200).send({
        status: "success",
        message: "Chat already exists",
        data: existingChat,
      });
    }

    // Create a new chat with the identifier
    let newChat = await chatModel
      .create({
        members: sortedMembers,
        chatIdentifier,
      })
      
    newChat = await chatModel.findById(newChat._id).populate("members");



    res.status(201).send({
      status: "success",
      message: "Chat created successfully",
      data: newChat,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
};

const getAllChat = async (req, res) => {
  try {
    const chats = await chatModel
      .find({
        members: {
          $in: req.body.userID,
        },
      })
      .populate("members").populate("latestMessage").sort({
        updatedAt : 1
      });



    res.status(200).send({
      status: "success",
      message: "chats fetched successfully",
      data: chats,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error.message,
    });
  }
};


const clearUnReadCount = async (req,res) => {
  try {

    const {chatID}  = req.body;

    const chat = await chatModel.findByIdAndUpdate(chatID,{
      unReadMessages : 0
    },{
      new : true
    })


    const message = await messageModel.updateMany({
      chatID
    },{
      read:true
    },{
      new:true
    })

      
    const result = await chatModel.find({
      _id : chatID
    }).populate("members").populate("latestMessage");
    

    res.status(200).send({
      status : "success",
      message : "updated successfully",
      data : result
    })
    
  } catch (error) {
    res.status(400).send({
      status : "failed",
      message : error.message
    })
  }
}
export { newChat, getAllChat,clearUnReadCount };
