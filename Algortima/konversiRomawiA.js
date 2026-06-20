const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka (1-10): "));

let romawi = ["I", "II", "III", "IV", "V", "VI", "VII", "VII", "IX", "X"];

if(angka >= 0 && angka <= 10) {
    console.log(romawi[angka - 1]);
} else {
    console.log("inputan salah")
}