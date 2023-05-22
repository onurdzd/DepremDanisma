const User = require("./users-model");

const idIsValid = async (req, res, next) => {
    try {
      const user = await User.getById(req.params.id);
      if (user.length === 0) {
        next({
          status: 401,
          message: `${req.params.id} nolu user bulunmuyor`,
        });
      } else {
          req.user=user
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    idIsValid
  };
