const express = require("express");
const cors = require("cors");
const auth = require("./middlewares/auth");
const test = require("./middlewares/test");
const app = express(); 

app.use(auth) //excuted before all api
app.use(cors()); //thrid part middleware
let users = [];
//middleware

app.use(express.json()); //body parser inbulit

app.post("/users", (req, res) => { 
  // console.log(req.body);
  users.push(req.body);
  res.send("user created");
});

//test middleware executed 
app.get("/users",test, (req, res) => {
  res.status(200).send(users);
});

app.delete("/users/:email", (req, res) => {
  const email = req.params.email;
  if (users.find((item) => item.email == email)) {
    users = users.filter((item) => item.email !== email);
    res.send("user deleted");
  } else {
    res.status(404).send("user not found");
  }
});

app.put("/users/:email", (req, res) => {
  const email = req.params.email;
  const userIndex = users.findIndex((item) => item.email == email);
  if (userIndex >= 0) {
    users[userIndex] = req.body;
    res.send("user updated");
  } else {
    res.status(404).send("user not found");
  }
});

app.listen(5000, () => {
  console.log("server is started");
});
