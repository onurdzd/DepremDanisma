const db = require("../../data/dbconfig");

const getAll = () => {
  return db("gonullu");
};

const getById = async (gonullu_id) => {
  return db("gonullu").where("gonullu_id", gonullu_id).first();
};
const getBy = (filter) => {
  return db("gonullu").where(filter).first();
};

const add = async (gonullu) => {
  const newGonulluId = await db("gonullu").insert(gonullu);
  const newGonullu = await getBy({ gonullu_id: newGonulluId[0] });
  return newGonullu;
};

const change = async (updateGonullu, id) => {
  await db("gonullu").where("gonullu_id", id).first().update(updateGonullu);
  const updatedGonullu = await getBy({ gonullu_id: id });
  return updatedGonullu;
};

const remove = (gonullu_id) => {
  return db("gonullu").where("gonullu_id", gonullu_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
