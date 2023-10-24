const mongoose=require('mongoose');
require('dotenv').config();

const dbconnect=async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then((conn)=>{
        console.log(`DB connected Successfully:${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

module.exports=dbconnect;