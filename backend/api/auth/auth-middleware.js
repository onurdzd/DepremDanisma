const userModel = require("../../api/users/users-model");
const bcryptjs = require("bcryptjs");
const jwt=require("jsonwebtoken")

const validatePayload = (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res
        .status(400)
        .json({ message: "You entered incomplete information. try again" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
const usernameCheck = async (req, res, next) => {
  try {
    let { username } = req.body;
    const existUser = await userModel.getBy({ username: username });
    console.log(existUser)
    if (!existUser) {
      res.status(404).json({ message: "no registered users" });
    } else {
      req.user = existUser;
      next();
    }
  } catch (error) {
    next(error);
  }
};
const usernameExist = async (req, res, next) => {
  try {
    let { username } = req.body;
    const existUser = await userModel.getBy({ username: username });
    if (existUser) {
      res.status(401).json({
        message: "Username used before, try again",
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const passwordCheck = async (req, res, next) => {
  console.log(req.body)
  try {
    const { password } = req.body;
    const existUser = await userModel.getBy({ username: req.body.username });
    let validPassword = bcryptjs.compareSync(password, existUser.password);
    if (!validPassword) {
      res.status(401).json({ message: "Invalid password" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const isValidToken=async(req,res,next)=>{
  try {
    const token=await req.headers.authorization
    if (token) {
        jwt.verify(token, "shh", (err, decodedJWT) => {
          if (err) {
            res.status(401).json({
              message: "Zaman aşımı/Hatalı token.Yeniden login olmalısın.",
            });
          } else {
            req.decodedJWT = decodedJWT;
            next();
          }
        });
      }else{
        res.status(401).json({
          message: "Önce login olmalısın"
        })
      }
  } catch (error) {
    next()
  }
}

module.exports = {
  validatePayload,
  usernameCheck,
  passwordCheck,
  usernameExist,
  isValidToken
};
