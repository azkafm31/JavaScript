const prompt = require("prompt-sync")({signit: true});

// Luas jajar genjang
console.log("=== Luas jajar genjang ===");

let a = parseFloat(prompt("Masukkan alas: "));
let t = parseFloat(prompt("Masukkan tinggi "));
let luas = a * t;
console.log("luas jajar genjang adalah: " + luas);

// keliling jajar genjang
console.log("\n=== keliling jajar genjang ===");
let alas = parseFloat(prompt("Masukkan panjang alas: "));
let sisi_miring = parseFloat(prompt("masukkan sisi miring: "));
let keliling = 2 * (alas + sisi_miring);
console.log("Keliling jajar genjang adalah: " + keliling);