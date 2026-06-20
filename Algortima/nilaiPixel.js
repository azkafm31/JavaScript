const prompt = require("prompt-sync")();

let pixel = parseInt(prompt("Masukkan nilai pixel: "));

if(pixel < 0) {
    pixel = 0;
} else if (pixel > 255) {
    pixel = 255;
}

console.log("Nilai Pixel =", pixel);