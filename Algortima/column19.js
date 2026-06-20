const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka: "));
let angkahuruf = ["satu", "dua", "tiga", "empat"];

if(angka >= 1 && angka <= 4) {
    console.log(angkahuruf[angka - 1]);
} else {
    console.log("angka yang dimasukkan salah");
}