const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");
const passport = require("../../config/passport")


router.post("/login", passport.authenticate("local"), usersController.login);
router.post("/signup", usersController.signup);
router.get("/logout", usersController.logout);
router.get("/", usersController.getMembers);


module.exports = router;