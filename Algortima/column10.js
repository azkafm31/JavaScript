const prompt = require("prompt-sync")();

let tb = parseFloat(prompt("Masukkan Tinggi Badan (Cm): "));

let beratideal = (tb - 100) * 0.9;

console.log("Berat badan ideal adalah =", beratideal , "kg");