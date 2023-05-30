const express = require("express");
const server = express();
const cors = require("cors");

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
  res.send("asdasd");
});

server.use("/api/user", userRouter);
server.use("/api/personel", personelRouter);
server.use("/api/sehir", sehirRouter);
server.use("/api/merkez", merkezRouter);
server.use("/api/hizmet", hizmetRouter);
server.use("/api/kurum", kurumRouter);
server.use("/api/envanter", envanterRouter);
server.use("/api/auth", authRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
