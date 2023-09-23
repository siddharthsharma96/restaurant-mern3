const userController = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
};
