// soal 12
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let r = parseInt(prompt("Masukkan jari-jari bola: "));

let phi;

if (r % 7 == 0) {
    phi = 22/7;
} else {
    phi = 3.14;
}

let volume = (4/3) * phi * r ** 3;
let lp = 4 * phi * r ** 2;

console.log("Volume bola adalah = ", volume);
console.log("Luas permukaan bola adalah =", lp);