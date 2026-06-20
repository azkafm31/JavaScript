const prompt = require("prompt-sync")();

let jarak = parseInt(prompt("Masukkan jarak (Cm): "));

let km = Math.floor(jarak / 100000);
let sisa = jarak % 100000;

let m = Math.floor(sisa / 100);
let cm = sisa % 100;

console.log("\nJarak");
console.log(km, "km");
console.log(m, "m");
console.log(cm, "cm");