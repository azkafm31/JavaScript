const prompt = require("prompt-sync")();

let x = Number(prompt("Masukkan nilai x: "));
let y = Number(prompt("Masukkan nilai y: "));
let z = Number(prompt("Masukkan nilai z: "));

let k = x + y - z;
let j = (x * y) - (z + x);

console.log("Nilai K = " + k);
console.log("Nilai J = " + j);