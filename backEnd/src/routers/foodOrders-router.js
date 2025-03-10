import express from "express";
import { createOrder } from "../controllers/foodOrders/create-order.js";
import { getOrder } from "../controllers/foodOrders/get-orders.js";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrder);
