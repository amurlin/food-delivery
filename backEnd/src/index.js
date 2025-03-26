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
app.use(cors({
  origin: 'http://localhost:3000', // Frontend апп-ийг ажиллаж буй хаяг
  methods: ['GET', 'POST'], // Хэрэглэх арга
}));

const port = 8000;
console.log(process.env.MONGO_CONNECTION_STRING);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/foods", foodRouter);
app.use("/users", userRouter);
app.use("/food-order", orderRouter);
app.use("/food-category", categoryRouter);
app.use("/foodOrderItem", foodOrderItemRouter);

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the current directory name (like __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// uploads фолдерыг шалгаж, байхгүй бол үүсгэх
const uploadDir = join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}



// app.get("/", (re, res) => {
//   res.send("hello world");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 