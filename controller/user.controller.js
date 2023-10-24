// const{userModel}=require('../model/user.model.js')
// const express=require('express');
// const mongoose=require('mongoose')
const User=require('../model/user.model.js');



// to get into the home Page
exports.home=(req,res)=>{
    res.send('Welcome to <br> <h1>USER-Management-System</h1><h3>I am Rahul Dev</h3>');
}