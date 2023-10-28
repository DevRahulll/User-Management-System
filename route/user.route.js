const express=require('express');

const{signup, getUserDetails, UserLogin}=require('../controller/user.controller.js');

const{signupValidator}=require('../middleware/signup.validator.js');
const{loginValidator}=require('../middleware/login.validator.js');
const{authenticateUser}=require('../middleware/authenticateUser.js');

const router=express.Router();



router.post('/signup',signupValidator,signup);

router.post("/login",authenticateUser,UserLogin)

router.get('/',loginValidator,getUserDetails);


module.exports=router;



