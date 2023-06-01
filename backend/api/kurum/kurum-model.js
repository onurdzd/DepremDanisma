const db = require("../../data/dbconfig");

const getAll = () => {
  return db("kurum as k")
    .leftJoin("merkez as m", "m.merkez_id", "k.merkez_id")
    .leftJoin("sehir as s", "s.sehir_id", "m.sehir_id").select("k.kurum_id","k.kurum_adi","k.kurum_adi_kisaltma","k.kurum_aciklama","k.kurum_link","k.kurum_logo_link","k.merkez_id","s.sehir_id","s.sehir_isim")
};
const getById = async (kurum_id) => {
  return db("kurum as k").where("k.kurum_id", kurum_id).first();
};
const getBy = (filter) => {
  return db("kurum as k").where(filter).first();
};
const add = async (kurum) => {
  const newKurumId = await db("kurum").insert(kurum);
  const newKurum = await getBy({ kurum_id: newKurumId[0] });
  return newKurum;
};

const change = async (updateInfos, id) => {
  await db("kurum").where("kurum_id", id).first().update(updateInfos);
  const updatedKurum = await getBy({ kurum_id: id });
  return updatedKurum;
};

const remove = (kurum_id) => {
  return db("kurum").where("kurum_id", kurum_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
