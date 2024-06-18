const express = require("express");
const PORT = 3000;
const app = express();
const fs = require("fs");

const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname + "/views/login.html"));
  fs.open("userdata.txt", "w", function (err) {
    if (err) throw err;
    console.log("created file");
  });
  
});

app.post("/handleroute", (req, res) => {
  res.send("hello" + req.body.userName);
  res.end();
});

app.listen(PORT, () => console.log(" server started"));
