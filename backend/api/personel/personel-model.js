const db=require("../../data/dbconfig")

const getAll = ()=>{
    return db("personel as p").leftJoin("merkez as m","m.merkez_id","p.merkez_id").leftJoin("sehir as s","s.sehir_id","m.sehir_id")
}
const getById =async (personel_id)=>{
    return db("personel as p").where("p.personel_id", personel_id).first();
}
const getBy = (filter)=>{
    return db("personel as p").where(filter).first();
}
const add = async(personel)=>{
    const newPersonelId = await db("personel").insert(personel);
    const newPersonel = await getBy({ personel_id: newPersonelId[0] });
    return newPersonel  
}

const change = async(updateInfos, id)=>{
    await db("personel").where("personel_id", id).first().update(updateInfos);
    const updatedPersonel = await getBy({ personel_id: id });
    return updatedPersonel;
}

const remove = (personel_id)=>{
    return db("personel").where("personel_id", personel_id).delete();
}

module.exports = {
    getAll,
    getBy,
    add,
    change,
    remove,
    getById,
  };