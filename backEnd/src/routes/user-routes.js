import express from "express";
import { createUser } from "../controllers/users/create-users.js";

export const userRouter = express.Router();

userRouter.post("/",  createUser);