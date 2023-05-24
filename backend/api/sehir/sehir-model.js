const db=require("../../data/dbconfig")

const getAll = ()=>{
    return db("sehir as s")
}
const getById =async (sehir_id)=>{
    const sehir = await db("sehir as s")
    return db("sehir as s").where("s.sehir_id", sehir_id).first();
}
const getBy = (filter)=>{
    return db("sehir as s").where(filter).first();
}
const add = async(sehir)=>{
    const newSehirId = await db("sehir").insert(sehir);
    const newSehir = await getBy({ sehir_id: newSehirId[0] });
    return newSehir  
}

const change = async(updateInfos, id)=>{
    await db("sehir").where("sehir_id", id).first().update(updateInfos);
    const updatedSehir = await getBy({ sehir_id: id });
    return updatedSehir;
}

const remove = (sehir_id)=>{
    return db("sehir").where("sehir_id", sehir_id).delete();
}

module.exports = {
    getAll,
    getBy,
    add,
    change,
    remove,
    getById,
  };