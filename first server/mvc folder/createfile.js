const http = require("http");
let fs = require("fs");

fs.appendFile("myfile.txt", "this is some text", function (err) {
  if (err) throw err;
  console.log("saved!");
});

fs.open("myfile.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("saved!");
});

fs.writeFile("myfile.txt", "this is sometext", function (err) {
  if (err) throw err;
  console.log("saved!");
});
