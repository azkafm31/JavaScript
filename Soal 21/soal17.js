// soal 17
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let harga = parseInt(prompt("Masukkan total harga barang: "));

let diskon = 0;

if (harga >= 200000) {
    diskon = harga * 0.075;
} 

let bayar = harga - diskon;

console.log("Diskon :" + "Rp "  + diskon.toLocaleString("id-ID"));
console.log("Total Bayar :" + "Rp " + bayar.toLocaleString("id-ID"));