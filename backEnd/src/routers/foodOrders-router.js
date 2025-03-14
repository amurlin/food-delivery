import express from "express";

import { getOrder } from "../controllers/foodOrders/get-orders.js";
import { createOrder } from "../controllers/foodOrders/create-order.js";
import { updateOrder } from "../controllers/foodOrders/put-order.js";
import { deleteOrder } from "../controllers/foodOrders/delete-order.js"; 

export const orderRouter = express.Router();
 
orderRouter.post("/", createOrder);
orderRouter.get("/", getOrder);
orderRouter.put("/:orderId", updateOrder);
orderRouter.delete("/:orderId", deleteOrder); 