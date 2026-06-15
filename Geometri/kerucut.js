const prompt = require("prompt-sync")({signit: true});

// Volume kerucut
console.log("=== Volume kerucut ===");
let r = parseFloat(prompt("Masukkan jari-jari alas: "));
let t = parseFloat(prompt("Masukkan tinggi kerucut: "));
let phi;
    if (r % 7 === 0) {
        phi = 22/7 ;
    } else {
        phi = 3.14 ;
    }
let v = 1/3 * phi * r ** 2 * t;
console.log("Volume kerucut adalah: " + v);

// Luas selimut
console.log("\n=== Luas selimut kerucut ===");
let jari = parseFloat(prompt("Masukkan jari-jari alas: "));
let s = parseFloat(prompt("Masukkan sisi pelukis: "));
let phi2;
    if (jari % 7 === 0) {
        phi2 = 22/7 ;
    } else {
        phi2 = 3.14 ;
    }
let ls = phi2 * jari * s;
console.log("Luas selimut kerucut adalah: " + ls);

// Luas permukaan kerucut
console.log("\n=== Luas permukaan kerucut ===");
let jari2 = parseFloat(prompt("Masukkan jari-jari alas: "));
let sp = parseFloat(prompt("Masukkan sisi pelukis: "));
let phi3;
    if (jari % 7 === 0) {
        phi3 = 22/7 ;
    } else {
        phi3 = 3.14 ;
    }
let lp = phi3 * jari2 * (jari2 + sp);
console.log("Luas permukaan kerucut adalah: " + lp);