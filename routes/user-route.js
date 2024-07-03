import { Router } from "express";
import { getUser, patchUser, postUser } from "../controllers/user-controller.js";

//Create Route
export const userRouter =  Router();

userRouter.get('/user', getUser)
userRouter.post('/user', postUser)
userRouter.patch('/user', patchUser)