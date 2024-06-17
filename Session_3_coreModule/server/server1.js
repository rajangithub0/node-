const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/about") {
      res.write("this is about page");
    } else if (req.url == "/contact") {
      res.write("this is contact page");
    } else if (req.url == "/profile") {
      res.write("this is profile page");
    } else {
      res.write("home page");
    }
    res.end();
  })
  .listen(5000, () => {
    console.log("server started");
  });
