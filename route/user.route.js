const express=require('express');
const{home}=require('../controller/user.controller.js');

const router=express.Router();

router.get('/home',home);

module.exports=router;



