const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukan angka: "));

if(angka > 0) {
    console.log("Bilangan Positif");
} else if(angka < 0) {
    console.log("Bilangan Negarif");
} else {
    console.log("Bilangan Nol");
}