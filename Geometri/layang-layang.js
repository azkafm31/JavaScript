const prompt = require("prompt-sync")({signit: true});

// Luas layang-layang
console.log("=== Luas layang-layang ===");
let d1 = parseFloat(prompt("Masukkan diagonal 1: "));
let d2 = parseFloat(prompt("Masukkan diagonal 2: "));
let l = 1/2 * d1 * d2;
console.log("Luas layang-layang adalah: " + l);

// Keliling layang-layang
console.log("\n=== Keliling layang-layang ===");
let s1 = parseFloat(prompt("Masukkan sisi 1: "));
let s2 = parseFloat(prompt("Masukkan sisi 2: "));
let k = 2 * (s1 + s2);
console.log("Keliling layang-layang adalah: " + k);