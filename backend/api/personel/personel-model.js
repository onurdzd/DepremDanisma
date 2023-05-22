const db=require("../../data/dbconfig")

const getAll = ()=>{
    return db("personel as p")
}
const getById =async (personel_id)=>{
    const personel = await db("personel as p")
    return db("personel as p").where("p.personel_id", personel_id).first();
}
const getBy = (filter)=>{
    return db("personel as p").where(filter).first();
}
const add = async(personel)=>{
    const newPersonelId = await db("personels").insert(personel);
    const newPersonel = await getBy({ personel_id: newPersonelId[0] });
    return newPersonel  
}

const change = async(updateInfos, id)=>{
    await db("personels").where("personel_id", id).update(updateInfos);
    const updatedPersonel = await getBy({ personel_id: id });
    return updatedPersonel;
}

const remove = ()=>{
    return db("personels").where("personel_id", personel_id).delete();
}

module.exports = {
    getAll,
    getBy,
    add,
    change,
    remove,
    getById,
  };