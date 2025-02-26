import express from "express";
import { getUsers } from "../controllers/users/get-all-users.js";
import { createUser } from "../controllers/users/create-users.js";
import { putUser } from "../controllers/users/put-users.js";
import { deleteUser } from "../controllers/users/delete-users.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/",  createUser);
userRouter.put("/:id", putUser);
userRouter.delete("/:id", deleteUser);