const router = require("express").Router();
const Sehir = require("./sehir-model");

router.get("/", async (req, res, next) => {
  try {
    const sehir = await Sehir.getAll();
    res.status(201).json(sehir);
  } catch (error) {
    next(error);
  }
});

router.get("/:id",  async (req, res, next) => {
  try {
    const sehir = await Sehir.getById(req.params.id);
    res.status(201).json(sehir);
  } catch (error) {
    next(error);
  }
});

router.get("/:name",  async (req, res, next) => {
  try {
    const sehir = await Sehir.getBy(req.params.name);
    res.status(201).json(sehir);
  } catch (error) {
    next(error);
  }
});

router.post("/",  async (req, res, next) => {
  try {
    const newSehir=Sehir.add(req.body)
    res.status(201).json(newSehir);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id",  async (req, res, next) => {
  try {
    await Sehir.remove(req.params.id)
    res.status(201).json({message:`${req.params.id} id nolu şehir silindi`});
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req,res,next)=> {
  try {
    await Sehir.change(req.body, req.params.id);
    res.status(201).json({message:`${req.params.id} id nolu şehir silindi`});
  } catch (error) {
    next(error);
  }
})


module.exports = router;
