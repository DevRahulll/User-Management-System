const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
        },
    password:{
        type:String,
        required:[true,"Password is compulsory"],
        select:false
    },
    bio:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:[true,"username is required"]
    }
})

const userModel=mongoose.model("user",userSchema);

module.exports={userModel};