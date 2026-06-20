const prompt = require("prompt-sync")();

let x = parseInt(prompt("Masukkan nilai X: "));
let y = parseInt(prompt("Masukkan nilai Y: "));

if (x > 0 && y > 0 ) {
    console.log("Kuadran I");
} else if (x < 0 && y > 0) {
    console.log("Kuadran II");
} else if (x < 0 && y < 0) {
    console.log("Kuadran III");
} else if (x > 0 && y < 0) {
    console.log("Kuadran IV");
} else {
    console.log("Tidak terletak di kuadran manapun")
}