// soal 21
// Tanggal : 14 Juni 2026
// Pembuat : Azka Fathan Mubina

const prompt = require("prompt-sync")();

let nama = prompt("Masukan nama siswa: ");
let nilai = parseInt(prompt("Masukan nilai: "));

let grade;

if (nilai >= 90 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E"
}

console.log("\nNama Siswa =", nama);
console.log("Nilai =", nilai);
console.log("Grade =", grade);