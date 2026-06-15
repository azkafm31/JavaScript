const prompt = require("prompt-sync")({signit: true});

// luas bola 
console.log("=== Luas bola ===");
let r = parseFloat(prompt("Masukkan jari-jari: "));
let phi;
    if (r % 7 === 0) {
        phi = 22/7 ;
    } else {
        phi = 3.14 ;
    }
let l = phi * r ** 2;
console.log("Luas bola adalah:" + l);

// Keliling bola 
console.log("\n=== Keliling bola ===");
let jari = parseFloat(prompt("Masukkan jari-jari: "));
let phi2;
    if (jari % 7 === 0) {
        phi2 = 22/7 ;
    } else {
        phi2 = 3.14 ;
    }
let k = 2 * phi2 * jari;
console.log("Keliling bola adalah: " + k);

// Diameter bola
console.log("\n=== Diameter bola ===");
let jari2 = parseFloat(prompt("Masukkan jari-jari: "));
let d = 2 * jari2;
console.log("Diameter bola adalah: " + d);