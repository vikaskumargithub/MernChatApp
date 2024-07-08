import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
const auth = asyncHandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (testToken || testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  //verify token
  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decodedToken.id);
  if (!user) {
   let err=new Error("No user found please Register")
    next(err);
  }
  req.userId = user._id;
  next();
});

export default auth;