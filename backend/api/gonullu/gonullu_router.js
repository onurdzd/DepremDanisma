const router = require("express").Router();
const Gonullu = require("./gonullu_model");

router.get("/", async (req, res, next) => {
  try {
    const gonullu = await Gonullu.getAll();
    res.status(201).json(gonullu);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const gonullu = await Gonullu.getById(req.params.id);
    res.status(201).json(gonullu);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const gonullu = await Gonullu.getBy(req.params.name);
    res.status(201).json(gonullu);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newGonullu = Gonullu.add(req.body);
    res.status(201).json(newGonullu);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Gonullu.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu gonullu silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Gonullu.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu gonullu düzenlendi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
