const router = require("express").Router();
const Danisan = require("./danisan-model");

router.get("/", async (req, res, next) => {
  try {
    const danisan = await Danisan.getAll();
    res.status(201).json(danisan);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const danisan = await Danisan.getById(req.params.id);
    res.status(201).json(danisan);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const danisan = await Danisan.getBy(req.params.name);
    res.status(201).json(danisan);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newDanisan = Danisan.add(req.body);
    res.status(201).json(newDanisan);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Danisan.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu danisan silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Danisan.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu danisan düzenlendi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
