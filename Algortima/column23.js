const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukan angka: "));

if(angka > 0) {
    if(angka % 4 === 0) {
        console.log("Bilangan kelipatan 4");
    } else {
        console.log("Bukan kelipatan 4");       
    }
} else {
    console.log("Bukan bilangan positif");
}