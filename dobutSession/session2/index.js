const express = require("express");
const products = require("./assets/product.json");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ massage: "home page is triggered", data: "test data" });
});

app.get("/product", (req, res) => {
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item.id == id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("product not found");
  }
});

app.get("/category/:category", (req, res) => {
  const category = req.params.category;
  const filterpro = products.filter((item) => item.category == category);
  if (filterpro.length != 0) {
    res.status(200).send(filterpro);
  } else res.send("category not found");
});

app.get("/name/:name", (req, res) => {
  const name = req.params.name;
  const namefil = products.filter((item) => item.name == name);
  if (namefil) {
    res.status(200).send(namefil);
  } else {
    res.status(404), send("name of this product is  not found");
  }
});
app.get("/rating1", (req, res) => {
  const rating1 = products.filter((item) => item.rating <= 4.5);
  res.send(rating1);
});

app.get("/rating2", (req, res) => {
  const rating2 = products.filter((item) => item.rating > 4.5);
  res.send(rating2);
});

app.get("/priceLowToHigh", (req, res) => {
  const price = [...products].sort((a, b) => a.price - b.price);
  res.send(price);
});

app.listen(5500, () => console.log(`server is started on port 5500`));
