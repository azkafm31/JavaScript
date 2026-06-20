const prompt = require("prompt-sync")({signit: true});

// Volume kubus
console.log("=== Volume kubus");
let s = parseFloat(prompt("Masukkan panjang sisi: "));
let v = s ** 3;
console.log("Volume kubus adalah: " + v);

// Luas permukaan kubus 
console.log("\n=== Luas permukaann kubus ===");
let sisi = parseFloat(prompt("Masukkan panjang sisi: "));
let volume = 6 * sisi ** 2;
console.log("Luas permukaan kubus adalah: " + volume);