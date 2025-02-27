import express from "express";
import { getFoods } from "../controllers/foods/get-foods.js";
import { createFood } from "../controllers/foods/create-food.js";

export const foodRouter = express.Router();

foodRouter.get("/", getFoods);
foodRouter.post("/", createFood);