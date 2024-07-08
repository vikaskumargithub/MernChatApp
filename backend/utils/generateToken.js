import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

export const genToken=asyncHandler(async(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:24*60*60
    })
})