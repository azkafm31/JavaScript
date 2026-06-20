const prompt = require("prompt-sync")();

let tahun = parseInt(prompt("Masukkan Tahun: "));

if((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    console.log(tahun, "Tahun Kabisat");
} else {
    console.log(tahun, "Bukan Tahun Kabisat");
}