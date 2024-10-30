import chatModel from "../models/chat.js";


const newChat = async (req,res) => {
    
    try {
        const {members} = req.body;
        const isConnectionExists = await chatModel.findOne({
            members
        });

        let newChat = undefined;

        if(!isConnectionExists){

            const chat = new chatModel(req.body);
    
            newChat = await chat.save();
        }


        res.status(201).send({
            status : "success",
            message : "chat created successfully",
            data : !newChat?newChat:isConnectionExists
        })
        
    } catch (error) {
        res.status(400).send({
            status : "failed",
            message : error.message
        })
    }
}


const getAllChat = async (req,res) => {
    try {

        const chats = await chatModel.find({
            members : {
                $in : req.body.userID
            }
        });


        res.status(200).send({
            status : "success",
            message : "chats fetched successfully",
            data : chats
        })
        
    } catch (error) {
        res.status(400).send({
            status : "fail",
            message : error.message
        });
    }
}


export {newChat,getAllChat};