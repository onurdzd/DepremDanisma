const router = require("express").Router();
const mw = require("./auth-middleware");
const userModel = require("../../api/users/users-model");
const bcryptjs = require("bcryptjs");
const utils = require("../../secret/utils");

router.get("/", async (req, res, next) => {
  try {
    const usermodel = await userModel.getAll();
    res.status(201).json(usermodel);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/register",
  mw.validatePayload,
  mw.usernameExist,
  async (req, res, next) => {
    try {
      let inserted = await userModel.createUser({
        username: req.body.username,
        password: bcryptjs.hashSync(req.body.password, 8),
      });
      res.status(201).json(inserted);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  mw.validatePayload,
  mw.usernameCheck,
  mw.passwordCheck,
  async (req, res, next) => {
    try {
      const payload = {
        username: req.body.username,
        password: bcryptjs.hashSync(req.body.password, 8),
      };

      const token = utils.createUserToken(payload, "1d");
      res.json({
        message: `welcome ${payload.username}`,
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/reset_password", (req, res) => {
  res.status(200).json({ message: "reset password çalışıyor" });
});

module.exports = router;
