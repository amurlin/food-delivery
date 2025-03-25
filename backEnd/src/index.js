import express from "express";
import dotenv from "dotenv" ;
import cors from "cors";
import { userRouter } from "./routers/users-router.js";
import { foodRouter } from "./routers/foods-router.js";
import { orderRouter } from "./routers/foodOrders-router.js";
import { connectToDatabase } from "./database/index.js";
import { categoryRouter } from "./routers/foodCategory-router.js";
import { foodOrderItemRouter } from "./routers/foodOrderItem-router.js";

const app = express();
dotenv.config();
connectToDatabase();
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3000', // Frontend апп-ийг ажиллаж буй хаяг
  methods: ['GET', 'POST'], // Хэрэглэх арга
}));

const port = 8000;
console.log(process.env.MONGO_CONNECTION_STRING);

app.use(express.json());
app.use("/food", foodRouter);
app.use("/users", userRouter);
app.use("/food-order", orderRouter);
app.use("/food-category", categoryRouter);
app.use("/foodOrderItem", foodOrderItemRouter);

app.get("/", (re, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 