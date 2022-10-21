const router =  require("express").Router();
const multer = require('multer');
const folderpathaffair = './public/images';

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, folderpathaffair)
    },
    filename: async function(req, file, cb) {
        cb(null, file.originalname);
    }
});
var avatarfolder = multer({ storage: storage });

const AuthController =  require("../controller/auth.controller");
router.post("/signup", avatarfolder.single("avatar"), AuthController.signupController)

module.exports =  router;