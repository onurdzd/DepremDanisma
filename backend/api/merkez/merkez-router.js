const router = require("express").Router();
const Merkez = require("./merkez-model");

router.get("/", async (req, res, next) => {
  try {
    const merkez = await Merkez.getAll();
    res.status(201).json(merkez);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const merkez = await Merkez.getById(req.params.id);
    res.status(201).json(merkez);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const merkez = await Merkez.getBy(req.params.name);
    res.status(201).json(merkez);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newMerkez = Merkez.add(req.body);
    res.status(201).json(newMerkez);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Merkez.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu merkez silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Merkez.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu merkez silindi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
