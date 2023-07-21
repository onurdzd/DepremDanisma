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
    const personel = await Personels.getById(req.params.id);
    res.status(201).json(personel);
  } catch (error) {
    next(error);
  }
});

router.get("/:name",  async (req, res, next) => {
  try {
    const personel = await Personels.getBy(req.params.name);
    res.status(201).json(personel);
  } catch (error) {
    next(error);
  }
});

router.post("/",  async (req, res, next) => {
  try {
    const newPersonel=Personels.add(req.body)
    res.status(201).json(newPersonel);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id",  async (req, res, next) => {
  try {
    await Personels.remove(req.params.id)
    res.status(201).json({message:`${req.params.id} id nolu personel silindi`});
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req,res,next)=> {
  try {
    await Personels.change(req.body, req.params.id);
    res.status(201).json({message:`${req.params.id} id nolu personel düzenlendi`});
  } catch (error) {
    next(error);
  }
})


module.exports = router;
