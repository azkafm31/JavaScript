const prompt = require("prompt-sync")();

let h1 = parseInt(prompt("Masukkan tanggal pertama: "));
let b1 = parseInt(prompt("Masukkan bulan pertama: "));
let t1 = parseInt(prompt("Masukkan tahun pertama: "));

let h2 = parseInt(prompt("\nMasukkan tanggal kedua: "));
let b2 = parseInt(prompt("Masukkan bulan kedua: "));
let t2 = parseInt(prompt("Masukkan tahun kedua: "));

let total1 = t1 * 365 + b1 * 30 + h1;
let total2 = t2 * 365 + b2 * 30 + h2;

let selisih = total2 - total1;

console.log("Selisih:", selisih ,"hari");