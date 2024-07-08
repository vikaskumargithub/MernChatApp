import asyncHandler from "express-async-handler";
import Chat from "../models/Chat.js";

//@description   Create or fetch one-on-one chat
//@Path          POST /api/v1/chat
//@access         Private 
export const accessChat=asyncHandler(async(req,res)=>{
    const {userId}=req.body

    if(!userId){
        console.log("User id not sent");
        res.sendStatus(400)
    }

    let isChat=await Chat.find({
        isGroupChat:false,
        $and:[{users:{$elemMatch:{$eq:userId}}},{users:{$elemMatch:{$eq:req.userId}}}]
    }).populate("users","-password -confirmPassword").populate("latestMessage")

    isChat=await Chat.populate(isChat,{
        path:"latestMessage.sender",
        select:"name email photo"
    })

    if(isChat.length>0){
        res.send(isChat[0])
    }else{
        var chatData={
            chatName:"Sender",
            isGroupChat:false,
            users:[userId,req.userId]
        }
    }
    try {
        let newChat=await Chat.create(chatData)

        newChat=await Chat.findById(newChat._id).populate("users","name email photo")

        res.send(newChat)
    } catch (error) {
        let err=new Error(error.message)
        next(err)
    }
})

//@description   fetch all chats for the logged in user
//@Path          GET /api/v1/chat
//@access         Private 
export const fetchChats=asyncHandler(async (req,res,next)=>{
    let chats=await Chat.find({users:{$elemMatch:{$eq:req.userId}}}).populate("users","-password -confirmPassword").populate("groupAdmin","-password -confirmPassword").populate("latestMessage").sort({updatedAt:-1})

    let finalChats=await Chat.populate(chats,{
        path:"latestMessage.sender",
        select:"name email photo"
    })
    res.status(200).json(finalChats)
}) 

//@description   create group chat
//@Path          post /api/v1/chat
//@access         Private 

export const createGroup=asyncHandler(async (req,res,next)=>{
    if(!req.body.users || !req.body.chatName){
        res.status(400).json("Please fill all the fields")
    }

    let users=JSON.parse(req.body.users.replace(/'/g,'"'));

    if(users<2){
        res.status(400).json("To create a group there should be more than 2 users")
    }

    users.push(req.userId)

    try {
        let groupChat=await Chat.create({
            chatName:req.body.chatName,
            isGroupChat:true,
            users:users,
            groupAdmin:req.userId,
        })

        groupChat=await Chat.findById(groupChat._id).populate("users","-password -confirmPassword").populate("groupAdmin","-password -confirmPassword").populate("latestMessage")

        groupChat=await Chat.populate(groupChat,{
            path:"latestMessage.sender",
            select:"name email photo"
        })
        res.status(201).json(groupChat)
    } catch (error) {
        let err=new Error(error.message)
        next(err)
    }
})

//@description   rename group chat
//@Path          PUT /api/v1/chat
//@access         Private 
export const renameGroup=asyncHandler(async(req,res,next)=>{
    let {chatId,chatName}=req.body

    let updatedChat=await Chat.findByIdAndUpdate(chatId,{chatName},{new:true}).populate("users","-password -confirmPassword").populate("groupAdmin","-password -confirmPassword")

    if(!updatedChat){
        return res.status(400).json("Chat doesn't exist")
    }
    res.status(200).json(updatedChat)
}) 

//@description   add person to group chat
//@Path          PUT /api/v1/chat/add
//@access         Private 

export const addPerson=asyncHandler(async(req,res)=>{
    let {chatId,userId}=req.body

    let updatedGroup=await Chat.findByIdAndUpdate(chatId,{$push:{users:userId}},{new:true}).populate("users","-password -confirmPassword").populate("groupAdmin","-password -confirmPassword")

    if(!updatedGroup){
        return res.status(400).json("Chat doesn't exist")
    }
    res.status(200).json(updatedGroup)
})

//@description   remove person from group chat
//@Path          PUT /api/v1/chat/remove
//@access         Private 

export const removePerson=asyncHandler(async(req,res)=>{
    let {chatId,userId}=req.body

    let updatedGroup=await Chat.findByIdAndUpdate(chatId,{$pull:{users:userId}},{new:true}).populate("users","-password -confirmPassword").populate("groupAdmin","-password -confirmPassword")

    if(!updatedGroup){
        return res.status(400).json("Chat doesn't exist")
    }
    res.status(200).json(updatedGroup)
})