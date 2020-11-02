var path = require("path");
var router = require("express").Router();
// var apiRoutes = require("../routes/API");


router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;