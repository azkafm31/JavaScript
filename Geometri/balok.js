const prompt = require("prompt-sync")({sigint: true});

// Volume balok
console.log("== Volume balok ==");
let p = parseFloat(prompt("Masukan panjang balok: "));
let t = parseFloat(prompt("Masukan tinggi balok: "));
let l = parseFloat(prompt("Masukan lebar balok: "));
let v = p * t * l;
console.log("Volume balok adalah: " + v);

// Luas permukaan balok
console.log("\n== Luas permukaan balok ==");
let panjang = parseFloat(prompt("Masukan panjang balok: "));
let tinggi = parseFloat(prompt("Masukan tinggi balok: "));
let lebar = parseFloat(prompt("Masukan lebar balok: "));
let lp = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
console.log("Luas permukaan balok adalah: " + lp);

// Keliling balok
console.log("\n== Keliling balok ==");
let pjg = parseFloat(prompt("Masukan panjang balok: "));
let tgi = parseFloat(prompt("Masukan tinggi balok: "));
let lbr = parseFloat(prompt("Masukan lebar balok: "));
let k = 4 * (pjg + tgi + lbr);
console.log("Keliling balok adalah: " + k);