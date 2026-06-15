// soal 20
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let huruf = prompt("Masukkan huruf: ").toLowerCase();

if (huruf >= "a" && huruf <= "z") {
    if (huruf == "a" || huruf == "i" || huruf == "u" || huruf == "e"|| huruf == "o") {
        console.log("huruf vokal");
    } else {
        console.log("huruf konsonan")
    }
} else {
    console.log("bukan huruf");
}