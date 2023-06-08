const express = require("express");
const server = express();
const cors = require("cors");
const User=require("./auth/auth-middleware")

require("dotenv").config();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");
const personelRouter = require("./personel/personel-router");
const sehirRouter = require("./sehir/sehir-router");
const merkezRouter = require("./merkez/merkez-router");
const hizmetRouter = require("./hizmet/hizmet-router");
const kurumRouter = require("./kurum/kurum-router");
const envanterRouter = require("./envanter/envanter-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("deneme");
});

server.use("/api/user", userRouter);
server.use("/api/personel",User.isValidToken, personelRouter);
server.use("/api/sehir",User.isValidToken, sehirRouter);
server.use("/api/merkez",User.isValidToken,  merkezRouter);
server.use("/api/hizmet",hizmetRouter);
server.use("/api/kurum",User.isValidToken,  kurumRouter);
server.use("/api/envanter",User.isValidToken,  envanterRouter);
server.use("/api/auth", authRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
