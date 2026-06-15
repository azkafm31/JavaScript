const prompt = require("prompt-sync")({signit: true});

// Volume limas
console.log("=== Volume Limas ===");
let l_alas = parseFloat(prompt("Masukkan luas alas: "));
let t = parseFloat(prompt("Masukkan tinggi: "));
let v = 1/3 * l_alas * t;
console.log("Volume limas adalah: " + v);

// Luas limas jika alas persegi
console.log("\n=== Luas alas persegi Limas ===");
let s = parseFloat(prompt("Masukkan panjang sisi: "));
let ap = s * s;
console.log("Volume limas adalah: " + ap);