const prompt = require("prompt-sync")();

let x = parseInt(prompt("Masukkan nilai x: "));
let y = parseInt(prompt("Masukkan nilai y: "));
let z = parseInt(prompt("Masukkan nilai z: "));
let temp = x;

x = y;
y = z;
z = temp;

console.log("X =", x);
console.log("Y =", y);
console.log("Z =", z);