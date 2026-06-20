const prompt = require("prompt-sync")();

let jam = parseInt(prompt("Masukkan jam: "));
let menit = parseInt(prompt("Masukkan menit: "));
let detik = parseInt(prompt("Masukkan detik: "));

detik++;

if (detik === 60) {
    detik = 0;
    menit++;

    if (menit === 60) {
        menit = 0;
        jam++;

        if (jam === 24) {
            jam = 0;
        }
    }
}

console.log(jam + ":" + menit + ":" + detik);