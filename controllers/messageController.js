import chatModel from '../models/chat.js'
import messageModel from '../models/message.js'


const newMessage = async (req,res)=>{
    try {
        const newMessage = new messageModel(req.body);

        const savedMessage = await newMessage.save();


        await chatModel.findByIdAndUpdate({
            _id : req.body.chatID
        },{
            latestMessage : savedMessage._id,
            $inc : {
                unReadMessages : 1
            }
        });
        

        res.status(201).send({
            status : "success",
            message : "message sent successfully",
            data : savedMessage
        });

    } catch (error) {
        res.status(400).send({
            status : 'failed',
            message : error.message

    })
    }
}


const getAllMessage = async (req,res) => {
    try {
       const messages = await messageModel.find({
        chatID : req.params.chatID
       });

       res.send({
        status : "success",
        message : "messages  fetched successfully",
        data : messages
       });
        
    } catch (error) {
       res.status(400).send({
        status : "failed",
        message : error.message
       }) 
    }
}

export {newMessage,getAllMessage};