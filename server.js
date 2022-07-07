const express = require("express");
const app = express();
const port ="https://raj-music.herokuapp.com/";

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.listen(port,()=>{
  console.log("Server is Running on Port 3000."+port);
})
