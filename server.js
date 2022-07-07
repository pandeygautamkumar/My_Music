const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.listen(8000,()=>{
  console.log("Server is Running on Port 3000.");
})
