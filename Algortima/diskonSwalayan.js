const prompt = require("prompt-sync")();

let totalBelanja = parseInt(prompt("Masukkan total harga belanjaan: "));
let diskon = 0;

if(totalBelanja > 100000) {
    diskon = totalBelanja * 0.1;
}

let hargaAkhir = totalBelanja - diskon;

console.log("\n=== Rincian Pembayaran === ");
console.log("Total Belanja = Rp", totalBelanja);
console.log("diskon = Rp", diskon);
console.log("Harga Akhir = Rp", hargaAkhir);