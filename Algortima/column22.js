const prompt = require("prompt-sync")();

let bulan = parseInt(prompt("Masukkan nomor bulan (1-12): "));

let tigaPuluhSatu = [1, 3, 5, 7, 8, 10, 12];
let tigaPuluh = [4, 6, 9, 11];

if (tigaPuluhSatu.includes(bulan)) {
    console.log("31 hari");
} else if (tigaPuluh.includes(bulan)) {
    console.log("30 hari");
} else if (bulan === 2) {
    console.log("28 atau 29 hari");
} else {
    console.log("Bulan tidak valid");
}