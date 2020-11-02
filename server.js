const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes");
const path = require("path");
const session = require("express-session");
const sequelize = require("sequelize");
const SESSION_SECRET = process.env.SESSION_SECRET || "sample secret"
const db = require("./models")
const config = require("./config/passport.js")
const passport = require("passport")
const bcrypt = require("bcrypt")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(` 🙌😈🌝  app is now listening on ${PORT}`)
    })
})

