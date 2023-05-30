const db = require("../../data/dbconfig");

const getAll = () => {
  return db("envanter as e")
    .leftJoin("merkez as m", "m.merkez_id", "e.merkez_id")
    .leftJoin("sehir as s", "s.sehir_id", "m.sehir_id");
};
const getById = async (envanter_id) => {
  return db("envanter as e").where("e.envanter_id", envanter_id).first();
};
const getBy = (filter) => {
  return db("envanter as e").where(filter).first();
};
const add = async (envanter) => {
  const newEnvanterId = await db("envanter").insert(envanter);
  const newEnvanter = await getBy({ envanter_id: newEnvanterId[0] });
  return newEnvanter;
};

const change = async (updateInfos, id) => {
  await db("envanter").where("envanter_id", id).first().update(updateInfos);
  const updatedEnvanter = await getBy({ envanter_id: id });
  return updatedEnvanter;
};

const remove = (envanter_id) => {
  return db("envanter").where("envanter_id", envanter_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
