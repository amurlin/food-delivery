import express from "express";
import dotenv from "dotenv" ;
import { userRouter } from "./routes/user-routes.js";
import { connectToDatabase } from "./database/index.js";

const app = express()
dotenv.config()
connectToDatabase()

const port = 8000
console.log(process.env.MONGO_CONNECTION_STRING);

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})