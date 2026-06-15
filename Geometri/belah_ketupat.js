const prompt = require("prompt-sync")({sigint: true});

// Luas belah ketupat
console.log("== Luas belah ketupat ==");
let d1 = parseFloat(prompt("Masukan diagonal 1: "));
let d2 = parseFloat(prompt("Masukan diagonal 2: "));
let luas = (d1 * d2) / 2;
console.log("Luas belah ketupat adalah: " + luas);

// Keliling belah ketupat
console.log("\n== Keliling belah ketupat ==");
let sisi = parseFloat(prompt("Masukan panjang sisi: "));
let keliling = 4 * sisi;
console.log("Keliling belah ketupat adalah: " + keliling);