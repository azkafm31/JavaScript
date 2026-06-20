const prompt = require("prompt-sync")();

let nama = prompt("Masukan nama: ");
let gol = prompt("Masukan jenis golongan (A/B/C/D): ").toUpperCase();
let jam = parseInt(prompt("Masukan waktu bekerja: "));

let upahperjam;
let gaji;

if(gol === "A") {
    upahperjam = 4000;
} else if(gol === "B") {
    upahperjam = 5000;
} else if(gol === "C") {
    upahperjam = 6000;
} else if(gol === "D") {
    upahperjam = 7500;
} else {
    console.log("Golongan tidak valid")
    Process.exit();
}

if(jam <= 48) {
    gaji = jam * upahperjam;
} else {
    let lembur = jam - 48;
    gaji = (48 * upahperjam) + (lembur * 3000);
}

console.log("\n=== Data karyawan ===");
console.log("Nama karyawan  :", nama);
console.log("Golongan       :", gol);
console.log("Lama bekerja   :", jam, "jam");
console.log("Total gaji     : Rp" + gaji);