const Personel = require("./personels-model");

const idIsValid = async (req, res, next) => {
    try {
      const personel = await Personel.getById(req.params.id);
      if (personel.length === 0) {
        next({
          status: 401,
          message: `${req.params.id} nolu personel bulunmuyor`,
        });
      } else {
          req.personel=personel
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  
const nameIsValid = async (req, res, next) => {
    try {
      const personel = await Personel.getBy(req.params.name);
      if (personel.length === 0) {
        next({
          status: 401,
          message: `${req.params.name} isimli personel bulunmuyor`,
        });
      } else {
          req.personel=personel
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    idIsValid
  };
