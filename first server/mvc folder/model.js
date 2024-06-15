const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.get("/", (req, res) => {
  res.sendfile(path.join(__filename + "/index.html"));
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.get("/books/:bookName", (req, res) => {
  res.send("you are looking for the book " + req.params.bookName);
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
