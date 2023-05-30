const router = require("express").Router();
const Kurum = require("./kurum-model");

router.get("/", async (req, res, next) => {
  try {
    const kurum = await Kurum.getAll();
    res.status(201).json(kurum);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const kurum = await Kurum.getById(req.params.id);
    res.status(201).json(kurum);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const kurum = await Kurum.getBy(req.params.name);
    res.status(201).json(kurum);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newKurum = Kurum.add(req.body);
    res.status(201).json(newKurum);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Kurum.remove(req.params.id);
    res.status(201).json({ message: `${req.params.id} id nolu kurum silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Kurum.change(req.body, req.params.id);
    res.status(201).json({ message: `${req.params.id} id nolu kurum güncellendi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
