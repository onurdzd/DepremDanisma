const db = require("../../data/dbconfig");

const getAll = () => {
  return db("users as u").leftJoin("roles as r", "r.role_id", "u.role_id");
};
const getById = async (user_id) => {
  const user = await db("users as u");
  return db("users as u").where("u.user_id", user_id).first();
};
const getBy = (filter) => {
  return db("users as u").where(filter).first();
};
const add = async (user) => {
  const newUserId = await db("users").insert(user);
  const newUser = await getBy({ user_id: newUserId[0] });
  return newUser;
};
const createUser = async (user) => {
  const { role_id } = await db("roles")
    .where("role_name", user.role_name)
    .first();
  const newUser = {
    username: user.username,
    passhash: user.passhash,
    role_id: role_id,
  };
  const insertedId = await db("users").insert(newUser);
  return getByFilter({ "u.userId": insertedId[0] });
};

const change = async (updateInfos, id) => {
  await db("users").where("user_id", id).update(updateInfos);
  const updatedUser = await getBy({ user_id: id });
  return updatedUser;
};

const remove = () => {
  return db("users").where("user_id", user_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
  createUser,
};
