const app=require('./app.js');
require("dotenv").config();

app.listen(process.env.PORT,async()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})
