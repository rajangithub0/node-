const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("about.html", (err, data) => {
    if (err) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.write("data temp");
      res.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(5000, () => {
  console.log("server stated on port 5000");
});
