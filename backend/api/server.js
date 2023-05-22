const express=require("express")
const server=express()

require('dotenv').config()

server.use(express.json())

server.get("/",(req,res)=>{
    res.send("asdasd")
})

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
    });
  });

module.exports=server