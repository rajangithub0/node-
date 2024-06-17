const express = require("express");

const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log("time :", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("home page");
});

router.get("/about", (req, res) => {
  res.send("about page");
});

app.use("/", router);
