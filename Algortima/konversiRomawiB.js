const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka: "));

const nilai = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
];

const romawi = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
];

let hasil = "";

for (let i = 0; i < nilai.length; i++) {
    while (angka >= nilai[i]) {
        hasil += romawi[i];
        angka -= nilai[i];
    }
}

console.log("Angka Romawi =", hasil);