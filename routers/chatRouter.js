import express from "express";
import auth from "../middleware/authorization.js";
import { newChat ,getAllChat,clearUnReadCount} from "../controllers/chatController.js";

const chatRoute = express.Router();

chatRoute.route("/create-new-chat").post(auth,newChat);


chatRoute.route("/chats").get(auth,getAllChat);


chatRoute.route("/clear-unread-messages").post(auth,clearUnReadCount)



export default chatRoute;