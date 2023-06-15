const router = require("express").Router();
const Hizmet = require("./hizmet-model");

router.get("/", async (req, res, next) => {
  try {
    const hizmet = await Hizmet.getAll();
    res.status(201).json(hizmet);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const hizmet = await Hizmet.getById(req.params.id);
    res.status(201).json(hizmet);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const hizmet = await Hizmet.getBy(req.params.name);
    res.status(201).json(hizmet);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newHizmet = Hizmet.add(req.body);
    res.status(201).json(newHizmet);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Hizmet.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu hizmet silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Hizmet.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu hizmet silindi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
