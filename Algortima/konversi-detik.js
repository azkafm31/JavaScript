const prompt = require("prompt-sync")();

let totalDetik = parseInt(prompt("Masukan detik: "));

let hari = Math.floor(totalDetik / 86400);
let sisa = totalDetik % 864000;

let jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;

let menit = Math.floor(sisa / 60);
let detik = sisa % 60;

console.log(hari, "hari");
console.log(jam, "jam");
console.log(menit, "menit");
console.log(detik, "detik");