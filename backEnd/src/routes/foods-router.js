import express from "express";
import { createFood } from "../controllers/foods/create-food";

export const foodRouter = express.Router();

foodRouter.post ("/", createFood);