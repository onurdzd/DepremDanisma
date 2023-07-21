const express = require("express");
const server = express();
const cors = require("cors");
const Auth = require("./auth/auth-middleware");

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
const gonulluRouter = require("./gonullu/gonullu_router");
const danisanRouter = require("./danisan/danisan-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("deneme");
});

server.use("/api/user", Auth.isValidToken, userRouter);
server.use("/api/personel", Auth.isValidToken, personelRouter);
server.use("/api/sehir", sehirRouter);
server.use("/api/merkez", merkezRouter);
server.use("/api/hizmet", hizmetRouter);
server.use("/api/kurum", kurumRouter);
server.use("/api/envanter", envanterRouter);
server.use("/api/auth", authRouter);
server.use("/api/gonullu", gonulluRouter);
server.use("/api/danisan", danisanRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
