import express from "express"
import authRouter from './routers/AuthRouter.js'
import userRoute from "./routers/UserRouter.js";
import chatRoute from "./routers/chatRouter.js";
import messageRouter from './routers/messageRouter.js'
import cors from 'cors'
const app = express();

//?this middleware helps in adding the body data to req object
app.use(express.json());

const corsOption = {
    origin : "http://localhost:5173",
    Credential:true
};
//?adding cors 
app.use(cors(corsOption));

//?route for handeling the requests related to authentication
app.use("/api/auth",authRouter);

app.use("/api/chat",chatRoute);

app.use("/api/user",userRoute);

app.use("/api/messages",messageRouter);


export default app;