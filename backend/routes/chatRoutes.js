import { Router } from "express";
import auth from "../middlewares/auth.js";
import { accessChat, addPerson, createGroup, fetchChats, removePerson, renameGroup } from "../controllers/chatControllers.js";

let chatRouter=Router()

chatRouter.post("/",auth,accessChat);
chatRouter.get("/",auth,fetchChats);
chatRouter.post("/group",auth,createGroup);
chatRouter.put("/group",auth,renameGroup);
chatRouter.put("/group/add",auth,addPerson);
chatRouter.put("/group/remove",auth,removePerson);


export default chatRouter;
