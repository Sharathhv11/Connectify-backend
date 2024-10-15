import express from "express"
import { userDetails } from "../controllers/userController.js";
import auth from "./../middleware/authorization.js"

const userRoute = express.Router();


userRoute.route("/get-userDetails").get(auth,userDetails);


export default userRoute;