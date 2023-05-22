const express=require("express")
const server=express()

require('dotenv').config()

const userRouter=require("./users/users-router")
const personelRouter=require("./personel/personel-router")

server.use(express.json())

server.get("/",(req,res)=>{
    res.send("asdasd")
})

server.use("/api/user",userRouter)
server.use("/api/personel",personelRouter)

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
    });
  });

module.exports=server