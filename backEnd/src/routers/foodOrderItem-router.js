import express from "express";
import { getFoodOrderItem } from "../controllers/foodOrderItem/get-orderItem.js";
import { getFoodOrderItemById } from "../controllers/foodOrderItem/get-orderItemById.js";
import { updateFoodOrderItem } from "../controllers/foodOrderItem/put-orderItem.js";
import { createFoodOrderItem } from "../controllers/foodOrderItem/create-orderItem.js";
import { deleteFoodOrderItem } from "../controllers/foodOrderItem/delete-orderItem.js";
 
export const foodOrderItemRouter = express.Router();
 
foodOrderItemRouter.post("/", createFoodOrderItem);  
foodOrderItemRouter.get("/", getFoodOrderItem);
foodOrderItemRouter.get("/:id", getFoodOrderItemById); 
foodOrderItemRouter.put("/:id", updateFoodOrderItem); 
foodOrderItemRouter.delete("/:id", deleteFoodOrderItem); 
 