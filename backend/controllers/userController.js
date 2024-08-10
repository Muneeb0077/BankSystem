const User=require("../databse/models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,cnic,password,account,balance}=req.body;
    const user=await User.create({
        name,email,cnic,password,account,balance
    });
    res.status(201).json({
        success:true,
        user
    });
});

exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return next(new ErrorHandler("Please enter Email and Password",400));
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    const isPasswordMatched=await User.findOne({password});
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }
    res.status(200).json({
        success:true,
        user
    });
});


exports.getUserDetails= catchAsyncErrors(async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    res.status(200).json({
        success: true,
        user
    });
});

exports.transferMoney = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.body._id);
    const receiver = await User.findOne({ account: req.body.account });
    if (!receiver) {
        return next(new ErrorHandler("User not found", 404));
    }
    const amount = Number(req.body.amount);
    if (user.balance < amount) {
        return next(new ErrorHandler("Insufficient balance", 400));
    }
    user.balance -= amount;
    receiver.balance += amount;
    await user.save();
    await receiver.save();
    res.status(200).json({
        success: true,
        balance: user.balance,
    });
});