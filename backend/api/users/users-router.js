const router = require("express").Router();
const Users = require("./users-model");

router.get("/", async (req, res, next) => {
    try {
      const users = await Users.getAll();
      res.status(201).json(users);
    } catch (error) {
      next(error);
    }
  });

router.get("/:id", mwuser.idIsValid, async (req, res, next) => {
    try {
      res.status(201).json(req.user);
    } catch (error) {
      next(error);
    }
  });

module.exports=router