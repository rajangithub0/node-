const { add, name, mul, sub, div } = require("./arrowfunctionmodules");
const fetchData = require("./trycatchmodeule");
const greet = require("./singlefunction"); // you can import any name

console.log(name);
console.log(add(3, 4));
console.log(sub(5, 3));
console.log(mul(5, 5));
console.log(div(8, 2));
console.log(greet("Rajan"));

fetchData();
