const prompt = require("prompt-sync")();

let a = parseInt(prompt("sisi a: "));
let b = parseInt(prompt("sisi b: "));
let c = parseInt(prompt("sisi c: "));

let jumlah = a * a + b * b;
let terbesar = c * c;

if(jumlah === terbesar){
    console.log("Segitiga siku-siku");
} else if(jumlah > terbesar) {
    console.log("segitiga Lancip");
} else {
    console.log("Segitiga Tumpul");
}