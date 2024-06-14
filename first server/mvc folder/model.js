const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
