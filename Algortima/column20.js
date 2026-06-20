const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka: "));
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

if(angka >= 1 && angka <= 12) {
    console.log("Bulan", bulan[angka - 1]);
} else {
    console.log("Output error");
}