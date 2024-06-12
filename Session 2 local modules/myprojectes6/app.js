import { add, mul, sub } from "./multifunction.mjs"; // object as a multifunction
import single, { second } from "./singlefunction.mjs";
// import only single file without curly bracket and with curly bracket with multifunction export

console.log(add(2, 3));
console.log(sub(6, 3));
console.log(mul(6, 3));

single();

second();
