const db=require("../../data/dbconfig")

const getAll = ()=>{
    return db("users as u")
}
const getById =async (user_id)=>{
    const user = await db("users as u")
    return db("users as u").where("u.user_id", user_id).first();
}
const getBy = (filter)=>{
    return db("users as u").where(filter).first();
}
const add = async(user)=>{
    const newUserId = await db("users").insert(user);
    const newUser = await getBy({ user_id: newUserId[0] });
    return newUser  
}

const change = async(updateInfos, id)=>{
    await db("users").where("user_id", id).update(updateInfos);
    const updatedUser = await getBy({ user_id: id });
    return updatedUser;
}

const remove = ()=>{
    return db("users").where("user_id", user_id).delete();
}

module.exports = {
    getAll,
    getBy,
    add,
    change,
    remove,
    getById,
  };