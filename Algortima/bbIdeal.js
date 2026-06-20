const prompt = require("prompt-sync")();

let beratAktual = parseInt(prompt("Masukkan berat badan aktual: "));
let beratIdeal =  parseInt(prompt("Masukkan berat badan ideal: "));

let selisih = Math.abs(beratAktual - beratIdeal);

if (selisih <= 2) {
    console.log("Berat badan Ideal");
} else {
    console.log("Berat badan Tidak Ideal");
}