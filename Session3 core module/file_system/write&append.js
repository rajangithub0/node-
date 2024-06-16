const fs = require("fs");

function writeDataToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data written successfull");
    }
  });
}

function appendDataToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data is append");
    }
  });
}

// appendDataToFile("hello.txt", "this is very amazing working with node js.");
// appendDataToFile("data.txt", "all data insdie the data file");
writeDataToFile("hello.txt", "welcome to the world of nodeJS file system.");
// writeDataToFile("data.txt", "this is data file in node js ");
