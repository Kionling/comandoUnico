const router = require("express").Router();
const performanceController = require("../../controllers/performanceController.js");
// /api/performances
router
  .route("/")
  .post(performanceController.create)
  .put(performanceController.update)
  .delete(performanceController.delete);

module.exports = router;
