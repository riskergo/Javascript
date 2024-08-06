// ini adalah parameter
// a dan b adalah parameter
// ingat, scope-nya berbeda
function tambah(a,b){
    return a + b;
}


// ini adalah argument
// argument diinputkan saat fungsi dipanggil
// 3 dan 4 adalah argument yang dimasukkan pada fungsi yang dipanggil
console.log(tambah(3,4));


// contoh 1
// menggunakan variabel
let a = 10;
let b = 30;
let hasil = tambah(a,b);
console.log(hasil);


// contoh 2
// menggunakan prompt, inputan user
// ingat, yang di-return prompt adalah string
let input1 = parseInt(prompt("Masukkan Nilai 1: "))
let input2 = parseInt(prompt("Masukkan Nilai 2: "))
let hasilKe2 = tambah(input1, input2);
console.log(hasilKe2);


// contoh 3
// argument yang diinputkan ke dalam fungsi adalah fungsi lain
// buat fungsi perkalian
function kali(a,b){
    return a * b;
}
// panggil fungsi perkalian
let hasilKe3 = kali(tambah(2,2), tambah(7,1));
// dengan argument fungsi tambah
console.log(hasilKe3);