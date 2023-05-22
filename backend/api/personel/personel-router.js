const router = require("express").Router();
const Personels = require("./personel-model");

router.get("/", async (req, res, next) => {
  try {
    const personels = await Personels.getAll();
    res.status(201).json(personels);
  } catch (error) {
    next(error);
  }
});

router.get("/:id",  async (req, res, next) => {
  try {
    res.status(201).json(req.personel);
  } catch (error) {
    next(error);
  }
});

router.get("/:name",  async (req, res, next) => {
  try {
    res.status(201).json(req.personel);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
