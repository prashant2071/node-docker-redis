const express = require('express');
const app =express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/',(req,res) =>{
res.send("hello from backend")
})

app.listen(PORT ,(err)=>{
if(err){
    console.log("failed to connect server"); 
}
else{
    console.log(`server connection created successfully at port ${PORT}`)
}
})