const prompt = require("prompt-sync")();

let angka = prompt("Masukkan angka: ");

if (angka % 2 === 0) {
    console.log("bilangan genap");
} else {
    console.log("bilangan ganjil");
}