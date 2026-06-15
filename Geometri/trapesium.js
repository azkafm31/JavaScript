const prompt = require("prompt-sync")({sigint: true});

// keliling trapesium
console.log("=== keliling trapesium ===");
let a = parseFloat(prompt("Masukkan sisi pertama: "));
let b = parseFloat(prompt("Masukkan sisi kedua: "));
let c = parseFloat(prompt("Masukkan sisi ketiga: "));
let d = parseFloat(prompt("Masukkan sisi keempat: "));
let k = a + b + c + d;
console.log("Keliling trapesium adalah: " + k);

// Luas trapesium
console.log("\n=== Luas trapesium ===");
let e = parseFloat(prompt("Masukkan sisi pertama: "));
let f = parseFloat(prompt("Masukkan sisi kedua: "));
let t = parseFloat(prompt("Masukkan tinggi: "))
let l = 1/2 * ( e + f) * t ;
console.log("Luas trapesium adalah: " + l);