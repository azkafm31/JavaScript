const prompt = require("prompt-sync")({signit: true});

// Luas persegi panjang
console.log("=== Luas Persegi Panjang ===");

let p = parseFloat(prompt("Masukkan Panjang: "));
let l = parseFloat(prompt("Masukkan Lebar: "));
let luas = p * l;
console.log("luas persegi panjang adalah: " + luas);

// keliling persegi panjang
console.log("\n=== Keliling persegi panjang ===")

let panjang = parseFloat(prompt("Masukkan Panjang: "));
let lebar = parseFloat(prompt("Masukkan Lebar: "));
let keliling = 2 * (panjang + lebar);
console.log("Keliling persegi panjang adalah: " + keliling);