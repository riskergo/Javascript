    //* function expression

const tampilNama = function (nama){
    return `Nama saya ${nama}`;
}
console.log(tampilNama("Core"))

    //* arrow function dan beragam cara pembuatannya
//* 1. parameter hanya 1
const tampilNama2 = (nama) => {
    return `Nama saya ${nama}`;
}
console.log(tampilNama2("Foo"))

//* 2. parameter ada 2 atau lebih
const tampilNamaDanWaktu = (nama,waktu) => {
    return `Selamat ${waktu}, ${nama}`
}
console.log(tampilNamaDanWaktu("Joana", "Pagi"));

//* 3. parameter ada 1, tapi dengan versi yang lain
const tampilNama3 = nama => {
    return `Halo, ${nama}`;
}
console.log(tampilNama3("Kor"));

//* implicit return and without parentheses and curly brackets
const tampilNama4 = nama => `Halo, ${nama}`;
console.log(tampilNama4("Ule"));


//* contoh kasus

let mahasiswa = ["Boyo", "Jik", "Ajik"];
    //* versi function biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

    //* versi arrow function singkat padat
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);
