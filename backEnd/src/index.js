import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv" ;
import { userRouter } from "./routes/user-routes.js";

const app = express()
dotenv.config()

const port = 8000
console.log(process.env.MONGO_CONNECTION_STRING);


// const mongoString = "mongodb+srv://eamurlin:CWgBRVZH2VULLPLu@cluster0.txlig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=> {
    console.log("database connection established");
});

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})