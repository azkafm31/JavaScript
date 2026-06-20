const prompt = require("prompt-sync")();

let jamkerja = parseInt(prompt("Masukkan jam kerja: "));
let upah;

if(jamkerja <= 48) {
    upah = jamkerja * 2000;
} else {
    let lembur = jamkerja - 48;
    upah = (48 * 2000) + (lembur * 3000);
}

console.log("Upahnya adalah : Rp " + upah);