const http = require("http");
let fs = require("fs");

fs.rename("myfile.txt", "mynewfile.txt", function (err) {
  if (err) throw err;
  console.log("file renamed");
});
