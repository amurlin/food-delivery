import express from "express";
import { getFoods } from "../controllers/foods/get-foods.js";
import { putFood } from "../controllers/foods/put-food.js";
import { createFood } from "../controllers/foods/create-food.js";
import { deleteFood } from "../controllers/foods/delete-food.js";

export const foodRouter = express.Router();

foodRouter.put("/:foodId", putFood);
foodRouter.get("/:foodId", getFoods);
foodRouter.post("/", createFood);
foodRouter.delete("/:foodId", deleteFood);