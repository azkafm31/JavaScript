const prompt = require("prompt-sync")();

let harga = parseInt(prompt("masukkan harga makanan: "));
let pajak = harga * 0.10;
let fee = harga * 0.05;
let bayar = harga + pajak + fee;

console.log("\nHarga makanan adalah :", harga);
console.log("Pajak :", pajak);
console.log("Fee :", fee)
console.log("Harga bayar :", bayar);