// const products = require("./product.json");
// let count = 1;
// for (let p of products) {
//   console.log(`----------- item ${count}-----------`);
//   for (let key in p) {
//     console.log(`${key}:${p[key]}`);
//   }
//   count++;
// }

// above is using for the json file to import with loop

const products = require("./product.json");
let count = 1;
for (let p of products) {
  console.log(`---------- item ${count}----------`);
  for (let key in p) {
    console.log(`${key}:${p[key]}`);
  }
  count++;
}

// the above code is using the array for ilteration
