const prompt = require("prompt-sync")();

let a = parseInt(prompt("Masukkan bilangan pertama: "));
let b = parseInt(prompt("Masukkan bilangan kedua: "));
let c = parseInt(prompt("Masukkan bilangan ketiga: "));

if(a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log("Urutan naik:");
console.log(a, b, c);