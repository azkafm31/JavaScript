const prompt = require("prompt-sync")({signit: true});

// Volume tabung
console.log("=== Volume tabung ===");
let r = parseFloat(prompt("Masukkan jari-jari: "));
let t = parseFloat(prompt("Masukkan tinggi: "));
let phi;
    if (r % 7 === 0){
        phi = 22/7 ;
    } else {
        phi = 3.14 ;
    }
let v = phi* r ** 2 * t;
console.log("Volume tabung adalah: " + v)

// Luas permukaan tabung
console.log("\n=== Luas Permukaan tabung ===");
let jari = parseFloat(prompt("Masukkan jari-jari: "));
let tinggi = parseFloat(prompt("Masukkan tinggi: "));
let phi2;
    if (jari % 7 === 0){
        phi2 = 22/7 ;
    } else {
        phi2 = 3.14 ;
    }
let lp = 2 * phi2 * jari * (jari + tinggi);
console.log("Luas permukaan tabung adalah: " + lp)