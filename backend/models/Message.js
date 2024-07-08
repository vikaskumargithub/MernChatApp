import {model,Schema} from 'mongoose'

const messageSchema=new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        trim:true
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref:"Chat"
    },
    readBy:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }]
},{
    timestamps:true
})

let Message=model("Message",messageSchema)

export default Message;