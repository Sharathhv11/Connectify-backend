import express from "express"
import authRouter from './routers/AuthRouter.js'
import userRoute from "./routers/UserRouter.js";
const app = express();

//?this middleware helps in adding the body data to req object
app.use(express.json());

//?route for handeling the requests related to authentication
app.use("/api/auth",authRouter);

app.use("/api/user",userRoute);

export default app;