import express from 'express'
import auth from "../middleware/authorization.js";
import {newMessage,getAllMessage} from '../controllers/messageController.js'
const messageRouter = new express.Router();


messageRouter.route("/newMessage").post(auth,newMessage);

messageRouter.route("/all-messages/:chatID").get(auth,getAllMessage);


export default messageRouter;