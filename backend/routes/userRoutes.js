import {Router} from 'express';
import { login, register, searchUsers } from '../controllers/userControllers.js';
import upload from '../middlewares/uploadFile.js';
import auth from '../middlewares/auth.js';
let userRouter=Router()

userRouter.post("/register",upload.single("photo"),register)
userRouter.post("/login",login)

userRouter.get("/",auth,searchUsers)

export default userRouter;