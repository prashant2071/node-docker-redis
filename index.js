const express = require('express');
const app =express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/',(req,res) =>{
res.send("<h2>hello from backend!!!</h2>")
})

app.listen(PORT ||3000,(err)=>{
if(err){
    console.log("failed to connect server"); 
}
else{
    console.log(`server connection created successfully at port ${PORT}`)
}
})