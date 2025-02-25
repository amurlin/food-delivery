import express from "express";
import { getUsers } from "../controllers/users/get-all-users.js";
import { createUser } from "../controllers/users/create-users.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/",  createUser);