const http = require("http");
let fs = require("fs");

fs.unlink("myfile.txt", function (err) {
  if (err) throw err;
  console.log("file deleted");
});
