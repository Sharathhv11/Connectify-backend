import express from 'express'
import {logIn, signUp} from "./../controllers/authControlers.js"



const authRouter = express.Router();

authRouter.route("/signUp").post(signUp);

authRouter.route('/login').post(logIn);



export default authRouter;