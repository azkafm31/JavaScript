const prompt = require("prompt-sync")({sigint: true});

//luas lingkaran
console.log("=== Luas lingkaran ===");
let r = parseFloat(prompt("Masukkan jari-jari: "));
let phi;
    if (r % 7 === 0) {
        phi = 22/7 ;
    } else {
        phi = 3.14 ;
    }
let l = phi * r ** 2;
console.log("luas lingkaran adalah: " + l)

// Keliling bola 
console.log("\n=== Keliling lingkaran ===");
let jari = parseFloat(prompt("Masukkan jari-jari: "));
let phi2;
    if (jari % 7 === 0) {
        phi2 = 22/7 ;
    } else {
        phi2 = 3.14 ;
    }
let k = 2 * phi2 * jari;
console.log("Kelling lingkaran adalah: " + k);

// Diameter bola
console.log("\n=== Diameter lingkaran ===");
let jari2 = parseFloat(prompt("Masukkan jari-jari: "));
let d = 2 * jari2;
console.log("Diameter lingkaran adalah: " + d);