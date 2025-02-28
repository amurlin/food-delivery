import express from "express";
import dotenv from "dotenv" ;
import { userRouter } from "./routes/users-router.js";
import { foodRouter } from "./routes/foods-router.js";
import { orderRouter } from "./routes/orders-router.js";
import { connectToDatabase } from "./database/index.js";
import { categoryRouter } from "./routes/foodCategory-router.js";

const app = express()
dotenv.config()
connectToDatabase()

const port = 8000
console.log(process.env.MONGO_CONNECTION_STRING);

app.use(express.json());
app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/order", orderRouter);
app.use('/category', categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})