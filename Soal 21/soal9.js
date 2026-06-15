// soal 9
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let p = parseInt(prompt("Masukan panjang: "));
let l = parseInt(prompt("Masukan lebar: "));

let luas = p * l;
let keliling = 2 * (p + 1);
console.log("Luas: ", luas);
console.log("keliling = ", keliling);