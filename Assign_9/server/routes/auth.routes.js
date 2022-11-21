const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/user/create",
    [
      verifySignUp.checkValidate
    ],
    controller.signup
  );

  app.put("/user/edit",  [
    verifySignUp.checkUpdate
  ],
  controller.updateUser);

  app.get("/user/getAll", controller.getAll);
  app.delete("/user/delete",  controller.deleteUser);
};