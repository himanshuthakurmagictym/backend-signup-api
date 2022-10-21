const router =  require("express").Router();
const AuthController =  require("../controller/auth.controller");
router.post("/signup", AuthController.signupController)

module.exports =  router;