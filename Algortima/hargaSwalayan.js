const prompt = require("prompt-sync")();

let belanja = parseInt(prompt("Masukkan nilai belanja: "));

let hasil = Math.floor(belanja / 25) * 25;

console.log("Hasil pembulatan = Rp" + hasil);