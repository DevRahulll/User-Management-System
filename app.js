const express=require('express');
const app=express();
const dbconnect=require('./config/db.js');
const router=require('./route/user.route.js');

// database connection
dbconnect();

app.use(express.json());
app.use('/',router);

module.exports=app;