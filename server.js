const express = require("express");
const app = express();
const mysql = require("mysql");
const db = require("./models");
const path = require("path");
const routes = require("./routes/contact-routes")
const routesHtml = require('./routes/html-routes')
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sequelize = require('sequelize')

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const corsOptions = {
  origin: "http://kionling.herokuapp.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// Other routes and middleware
// app.use(routes);
// app.use(routesHtml)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


  app.listen(PORT, () => {
    console.log(`🙌😈🌝  app is now listening on ${PORT}`);
  });