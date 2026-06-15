// soal 18
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let angka = prompt("Masukkan angka: ");

if (angka % 7 == 0) {
    console.log("bilangan merupakan kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}