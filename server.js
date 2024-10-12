import dotenv from "dotenv";
import {connect} from "mongoose";
import dataBase from "./Config/db.js";

dotenv.config({
    path:"./config.env"
})

import app from "./app.js"


dataBase();

const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("hello from sharath");
})


app.listen(port ,()=>{
    console.log(`sever stared on port ${port}`)    
})


