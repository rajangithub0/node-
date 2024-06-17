const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world!");
    res.end();
  } else {
    res.write("you are not on the home page.");
    res.end();
  }
});

server.listen("3000");
