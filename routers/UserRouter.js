import express from "express"
import { userDetails,getAllUser } from "../controllers/userController.js";
import auth from "./../middleware/authorization.js"

const userRoute = express.Router();


userRoute.route("/get-userDetails").get(auth,userDetails);

userRoute.route("/users").get(auth,getAllUser)


export default userRoute;