//using for the first run the command with npm i cookie-parser

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//load the cookie parsing middleware

app.use(cookieParser());

app.get("/", function (req, res) {
  console.log("cookies :", req.cookies);
  console.log("signed cookies :", req.signedCookies);
});
