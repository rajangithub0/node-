const fs = require("fs");

function readMyData(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  });
}

readMyData("data.txt");

function deleteMyFile(fileName) {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log("unable to delete file", err);
    } else {
      console.log("file deleted successfully");
    }
  });
}

deleteMyFile("hello.txt");
