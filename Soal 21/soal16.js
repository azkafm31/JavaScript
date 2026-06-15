// soal 16
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let angka = prompt("Masukkan juara (1)(2)(3): ");

if (angka == 1) {
    console.log("Selamat Anda Juara Utama");
} else if (angka == 2) {
    console.log("Selamat Anda Runner Up");
} else if (angka == 3) {
    console.log("selamat Anda Juara Ketiga");
} else {
    console.log("Inputan anda salah !");
}