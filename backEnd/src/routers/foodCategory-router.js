import express from "express";
import { createCategory } from "../controllers/foodCategory/create-category.js";
import { getCategory } from "../controllers/foodCategory/get-category.js";
import { putCategory } from "../controllers/foodCategory/put-category.js";
import { deleteCategory } from "../controllers/foodCategory/delete-category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategory);
categoryRouter.put("/:id", putCategory);
categoryRouter.delete("/:id", deleteCategory);