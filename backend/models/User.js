import {Schema,model} from "mongoose";
import bcrypt from 'bcryptjs'
import validator from 'validator'


const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name field is required"],
        trim:true,
        minLength:[4,"Min characters are 4"]
    },
    email:{
        type:String,
        required:[true,"Email field is required"],
        trim:true,
        validate:[validator.isEmail,"Enter proper email"]
    },
    password:{
        type:String,
        required:[true,"password field is required"],
        trim:true,
        minLength:[8,"Min characters are 8"]
    },
    confirmPassword:{
        type:String,
        validate:{
            validator:function(value){
                return this.password===value
            },
            message:"Password and Confirm Password do not match"
        }
    },
    photo:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
    }
},{
    timestamps:true
})

//pre-hook
userSchema.pre("save",async function(next){
    let salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

//methods
userSchema.methods.comparePassword=async function(pwd,pwdDB){
    return await bcrypt.compare(pwd,pwdDB)
}

let User=model("User",userSchema);
export default User;