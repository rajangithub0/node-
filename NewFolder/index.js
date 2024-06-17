const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("hello world");
    res.end("/about");
  } else {
    res.write("you are not the home page.");
    res.end();
  }
});

server.listen("8000");
