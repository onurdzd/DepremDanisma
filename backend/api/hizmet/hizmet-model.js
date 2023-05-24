const db = require("../../data/dbconfig");

const getAll = () => {
  return db("hizmet as h");
};
const getById = async (hizmet_id) => {
  return db("hizmet as h").where("h.hizmet_id", hizmet_id).first();
};
const getBy = (filter) => {
  return db("hizmet as h").where(filter).first();
};
const add = async (hizmet) => {
  const newHizmetId = await db("hizmet").insert(hizmet);
  const newHizmet = await getBy({ hizmet_id: newHizmetId[0] });
  return newHizmet;
};

const change = async (updateInfos, id) => {
  await db("hizmet").where("hizmet_id", id).first().update(updateInfos);
  const updatedHizmet = await getBy({ hizmet_id: id });
  return updatedHizmet;
};

const remove = (hizmet_id) => {
  return db("hizmet").where("hizmet_id", hizmet_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
