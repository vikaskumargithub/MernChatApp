import { model, Schema } from "mongoose";

const chatSchema = new Schema(
  {
    chatName: {
      type: String,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin:{
      type:Schema.Types.ObjectId,
      ref:"User"
    }
  },
  {
    timestamps: true,
  }
);

let Chat = model("Chat", chatSchema);

export default Chat;
