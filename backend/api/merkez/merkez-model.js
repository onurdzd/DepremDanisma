const db = require("../../data/dbconfig");

const getAll = () => {
  return db("merkez as m");
};
const getById = async (merkez_id) => {
  return db("merkez as m").where("m.merkez_id", merkez_id).first();
};
const getBy = (filter) => {
  return db("merkez as m").where(filter).first();
};
const add = async (merkez) => {
  const newMerkezId = await db("merkez").insert(merkez);
  const newMerkez = await getBy({ merkez_id: newMerkezId[0] });
  return newMerkez;
};

const change = async (updateInfos, id) => {
  await db("merkez").where("merkez_id", id).first().update(updateInfos);
  const updatedMerkez = await getBy({ merkez_id: id });
  return updatedMerkez;
};

const remove = (merkez_id) => {
  return db("merkez").where("merkez_id", merkez_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
