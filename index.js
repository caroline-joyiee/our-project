import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user-route.js";

//connect to database
await mongoose.connect(process.env.Mongo_Url);


//create an app
const app = express();


//middleware
app.use(express.json());



//use routes
app.use(userRouter);


//listen port

const port = process.env.PORT || 7070
app.listen(port, () => {
    console.log(`App is working on ${port}`)
})