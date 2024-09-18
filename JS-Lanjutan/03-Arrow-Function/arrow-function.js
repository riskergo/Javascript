    //* function expression
const tampilNama = function (nama){
    return `Nama saya ${nama}`;
}
// console.log(tampilNama("Core"))

        //* function expression 2
const tampilUmur = function (umur){
    return `Umurnya ${umur}`;
}
// console.log(tampilUmur(32));


    //* arrow function dan beragam cara pembuatannya
//* 1. parameter hanya 1
const tampilNama2 = (nama) => {
    return `Nama saya ${nama}`;
}
// console.log(tampilNama2("Foo"))

const tampilUmur2 = (umur) => {
    return `Umurnya ${umur}`;
}
// console.log(tampilUmur2(12));

//* 2. parameter ada 2 atau lebih
const tampilNamaDanWaktu = (nama,waktu) => {
    return `Selamat ${waktu}, ${nama}`
}
// console.log(tampilNamaDanWaktu("Joana", "Pagi"));

const tampilNamaDanWaktu2 = (nama, waktu) =>{
    return `sekarang jam ${waktu} wahai anda ${nama} gilo`
}
// console.log(tampilNamaDanWaktu2("Koree", "19:29"));


//* 3. parameter ada 1, tapi dengan versi yang lain
const tampilNama3 = nama => {
    return `Halo, ${nama}`;
}
// console.log(tampilNama3("Kor"));
const tampilWaktu = waktu => {
    return `sekarang jam ${waktu}`
}
// console.log(tampilWaktu("19:49"));

//* implicit return and without parentheses and curly brackets
const tampilNama4 = nama => `Halo, ${nama}`;
// console.log(tampilNama4("Ule"));

let motor = brand => `brand motor anda ${brand}`;
// console.log(motor("Suzuki"));

let sapa = () => `Sup nigga`;
console.log(sapa());

//* contoh kasus
let mahasiswa = ["Boyo", "Jik", "Ajik"];
    //* versi function biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

    //* versi arrow function singkat padat
let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//* contoh kasus 2
let mahasiswa2 = ["bmapuki", "ole", "kirao"];
    //* cek jumlah huruf
let jmlHuruf2 = mahasiswa2.map(function(nama){
    return nama.length;
})
// console.log(jmlHuruf2);

//* versi arrow function
let mahasiswa3 = [`koasrkoas`, '1239ujod', 'rajaGG'];
let jmlHuruf3 = mahasiswa3.map(JumlahHurufPadaMasing2Nama => JumlahHurufPadaMasing2Nama.length)     //* dengan implicit return 
// console.log(jmlHuruf3);
let masae = "tiga";
// console.log(masae.length);

//* arrow function tapi me-return versi object, gunakan ini
let mahasiswa4 = ["kira", "migilate", "kororo"];
let jumlahHuruf4 = mahasiswa4.map( nama => ({        //* bungkus dengan menggunakan kurung biasa (parentheses)
    // nama: nama,     //* ambil namanya dari parameter nama (parameter nama itu adalah isi elemen pada arraynya)
    //* untuk lebih singkatnya, di javascript baru bila ada property yang sama dengan nilainya cukup buat saja nama property-nya
    nama,
    jumlahHuruf: nama.length
}))
// console.log(jumlahHuruf4);
console.table(jumlahHuruf4);