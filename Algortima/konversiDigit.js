const prompt = require("prompt-sync")();

let digit = prompt("Masukan karakter: ");

let hasil;
if(digit >= '0' && digit <= '9') {
    hasil = parseInt(digit);
    console.log(hasil);
} else {
    hasil = -99;
    console.log(hasil);
}