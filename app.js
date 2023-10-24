const express=require('express');
const app=express();


app.get('/home',(req,res)=>{
    res.send('Welcome to <br> <h1>USER-Management-System</h1>');
})

module.exports=app;