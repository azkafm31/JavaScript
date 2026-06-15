const prompt = require("prompt-sync")({signit: true});

// Luas segitiga
console.log("=== Luas Segitiga ===");
let a = parseFloat(prompt("Masukkan alas: "));
let t = parseFloat(prompt("Masukkan tinggi: "));
let l = 1/2 * a * t;
console.log("Luas segitiga adalah: " + l)

// keliling segitiga
console.log("\n=== Luas Segitiga ===");
let s1 = parseFloat(prompt("Masukkan sisi 1: "));
let s2 = parseFloat(prompt("Masukkan sisi 2: "));
let s3 = parseFloat(prompt("Masukkan sisi 3: "));
let k = s1 + s2 + s3;
console.log("Luas segitiga adalah: " + k)