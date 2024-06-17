const express = require("express");
const product = require("./product.json");
const app = express(); //create express server

app.get("/product", (req, res) => {
  res.send(product); //send normal data
  //   res.json(product); // pure json data
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const products = product.find((item) => item.id == id);
  if (products) {
    return res.send(products);
  }
  return res.send("product not found");
});

// app.get("/", (req, res) => {
//   res.send(__dirname + "/files/home.html");
// });
app.get("/about", (req, res) => {
  res.status(200).send("<h1>this is about page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>this is contact page</h1>");
});

app.get("/news", (req, res) => {
  res.status(200).send("this is news page");
});

// make a particuler folder static

app.use("/", express.static("website"));
//for local automatic load if page is not found
app.use((req, res) => {
  res.sendFile(__dirname + "/files/home.html");
});

app.listen(5000, () => console.log("server started"));
