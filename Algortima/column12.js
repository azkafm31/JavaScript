const prompt = require("prompt-sync")();

let huruf = prompt("Masukkan huruf: ").toLowerCase();

if ("aiueo".includes(huruf)) {
    console.log("huruf vokal");
} else {
    console.log("huruf konsonan");
}