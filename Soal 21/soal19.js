// soal 19
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let x = parseInt(prompt("Masukan nilai X: "));
let y = parseInt(prompt("Masukan nilai Y: "));
let z = parseInt(prompt("Masukan nilai Z: "));

let terbesar = x;
let terkecil = x;

if (y > terbesar) {
    terbesar = y;
}
if (z > terbesar) {
    terbesar = z;
}

if (y < terkecil) {
    terkecil = y;
}
if (z < terkecil) {
    terkecil = z
}

console.log("Nilai terbesar =", terbesar);
console.log("NIlai terkecil =", terkecil);