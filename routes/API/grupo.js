const router = require("express").Router();
const grupoController = require("../../controllers/groupController.js");
const grupo = require("../../models/grupo.js");

router.route("/").get(grupoController.getUserInfo)
router.route("/users").get(grupoController.getMembers)
router.route("/getInviteCode").get(grupoController.getInviteCode)
router.route("/joinGrupo").get(grupoController.joinGrupo)