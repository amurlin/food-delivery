import express from "express";
import { login } from "../controllers/users/login.js";
import { putUser } from "../controllers/users/put-users.js";
import { getUsers } from "../controllers/users/get-all-users.js";
import { createUser } from "../controllers/users/create-users.js";
import { deleteUser } from "../controllers/users/delete-users.js";
import { authorizationMiddleware } from "../middleware/authorazation.js";
import { validateEmailMiddleware } from "../middleware/validateEmail.js";

export const userRouter = express.Router();

userRouter.get("/", authorizationMiddleware, getUsers);
userRouter.put("/:id", authorizationMiddleware, putUser);
userRouter.post("/", validateEmailMiddleware,  createUser);
userRouter.delete("/:id", authorizationMiddleware, deleteUser);
userRouter.post("/login", validateEmailMiddleware, login);