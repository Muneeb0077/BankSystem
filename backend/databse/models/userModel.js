const mongoose= require("mongoose");
const validator=require("validator");

const userSchema= new mongoose.Schema({     

    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should have atleast 4 characters"]
    },
    cnic:{
        type:String,
        required:[true,"Please enter your CNIC"],
        unique:true,
    },

    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater then 8 characters"],
        select:false
    },
    account:{
        type: Number,
        required:[true,"Please enter your account number"],
        unique:true,
    },
    balance:{
        type: Number,
        required:[true,"Please enter your balance"],
    },
});

module.exports=mongoose.model("User",userSchema);