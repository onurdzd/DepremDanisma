const db = require("../../data/dbconfig");

const getAll = () => {
  return db("danisan");
};

const getById = async (danisan_id) => {
  return db("danisan").where("danisan_id", danisan_id).first();
};

const getBy = (filter) => {
  return db("danisan").where(filter).first();
};

const add = async (danisan) => {
  const newDanisanId = await db("danisan").insert(danisan);
  const newDanisan = await getBy({ danisan_id: newDanisanId[0] });
  return newDanisan;
};

const change = async (updateDanisan, id) => {
  await db("danisan").where("danisan_id", id).first().update(updateDanisan);
  const updatedDanisan = await getBy({ danisan_id: id });
  return updatedDanisan;
};

const remove = (danisan_id) => {
  return db("danisan").where("danisan_id", danisan_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
