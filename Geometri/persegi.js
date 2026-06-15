const prompt = require("prompt-sync")({ sigint: true });

// luas persegi
console.log("=== Luas Persegi === ");
let sisi = parseFloat(prompt("Masukkan panjang sisi: "));
let luas = sisi * sisi;

console.log("luas persegi adalah: " + luas);

// keliling persegi
console.log("\n=== Keliling Persegi ===")
let sisi2 = parseFloat(prompt("Masukkan panjang sisi: "));
let keliling = sisi2 * 4;

console.log("Keliling Persegi adalah: " + keliling);