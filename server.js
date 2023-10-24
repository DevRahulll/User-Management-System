const app=require('./app.js');
require("dotenv").config();

const PORT=process.env.PORT;

app.listen(PORT,async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
