const prompt = require("prompt-sync")();

let totalHari = parseInt(prompt("Masukan jumlah hari proyek: "));

let tahun = Math.floor(totalHari / 360);
sisa = totalHari % 360;

let bulan = parseInt(sisa / 30);
hari = sisa % 30;

console.log(tahun, "tahun");
console.log(bulan, "bulan");
console.log(hari, "hari");