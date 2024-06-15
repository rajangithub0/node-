const http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("myfile.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);
