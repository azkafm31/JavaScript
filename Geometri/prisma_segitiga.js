const prompt = require("prompt-sync")({signit: true});

// Volume prisma segitiga
console.log("=== volume prisma segitiga ===");
let alas = parseFloat(prompt("Masukkan alas segitiga: "));
let t_segitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));
let t_prisma = parseFloat(prompt("Masukkan tinggi prisma: "));
let v = 0.5  * alas * t_segitiga* t_prisma;
console.log("volume adalah: " + v);

// Luas permukaan prisma segitiga
console.log("\n=== Luas permukaan prisma segitiga ===");
let alas2 = parseFloat(prompt("Masukkan alas segitiga: "));
let tinggisegitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));

let sisi1 = parseFloat(prompt("Masukkan sisi: "));
let sisi2 = parseFloat(prompt("Masukkan sisi: "));
let sisi3 = parseFloat(prompt("Masukkan sisi: "));

let tinggiprisma = parseFloat(prompt("Masukkan tinggi prisma: "));

let luasalas = 0.5 * alas2 * tinggisegitiga;
let kelilingalas = sisi1 + sisi2 + sisi3;
let luaspermukaan = ( 2 * luasalas) + (kelilingalas * tinggiprisma);
console.log("Luas permukaan prisma segitiga adalah: " + luaspermukaan);