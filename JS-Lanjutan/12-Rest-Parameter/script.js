
/* 
    * Rest Parameter
    * sesuatu yang merepresentasikan pada argument dengan jumlah yang tidak terbatas menjadi sebuah array
    * notasinya seperti spread operator (...)
*/

function myFunc1(a,b){
    //* tangkap dari parameter
    return `a: ${a}, b: ${b}`;
}
// console.log(myFunc1(1,2));


//* rest parameter
function myFunc2(...myArgs){
    //* tangkap semua arguments
    return myArgs;
    //* rest parameter harus di akhir, tidak bisa di depan maupun di tengah
}
// console.log(myFunc2(3,5,7,2));


//* arguments
function myFunc3(){
    //* secara default, sebuah function mempunyai variabel default untuk menangkap arguments yang tidak
    //* tertampung oleh parameter (parameter fungsi tersebut tidak ada) saat fungsi dipanggil
    return arguments;   //* arguments bukanlah array tetapi jika menggunakan rest parameter akan dikonversi ke bentuk array
}
// console.log(myFunc3(3,7,1,7));


//* convert arguments
//* jikalau ingin merubah menjadi arguments, gunakan 2 cara ini    
    //* cara 1
function myFunc4(){
    return Array.from(arguments);    //* menggunakan fungsi Array.from()
}
// console.log(myFunc4(3,1,2,7));

function myFunc5(){
    return [...arguments];      //* menggunakan spread operator
}
// console.log(myFunc5(3,4,1,5));


    //* case 1, menjumlahkan seluruh element array
        //* menggunakan rest parameter
        //* lalu menggunakan for biasa atau for..of
            //* for..of
function jumlahkan1(...angka){
    let jumlah = 0;
    for(const num of angka){
        jumlah += num;
    }
    return jumlah;
}
// console.log(jumlahkan1(1,5,7,2,8,2));

            //* for biasa
function jumlahkan2(...angka){
    let jumlah = 0;
    for (let i = 0; i < angka.length; i++){
        jumlah += angka[i];
    }
    return jumlah;
}
// console.log(jumlahkan2(3,6,1,7,2));

            //* menggunakan high order function .reduce();
function jumlahkan3(...angka) {
    return angka.reduce( (jumlah, currentValue) => jumlah + currentValue, 0)
}
// console.log(jumlahkan3(3,5,7,1,2));



    //* case 2.1, array destructuring
    //* mengatur string yang muncul pertama sebagai nama kelompok lalu ketua dan sisanya anggota
const kl1 = ["irony", "fuad", "koree", "rusdi"];
        //* cara biasa
// const namaKlp = kl1[0];
        //* menggunakan destructuring beserta rest parameter
const [namaKlp, ketua, ...anggota]= kl1;
// console.log(`nama kelompok: ${namaKlp}, ketua ${ketua}, dan anggotanya ${anggota.join(" ")}`);
//* anggota berbentuk array
// console.log(anggota);

    //* case 2.2 object destructuring
const roleInPUBGM = {
    rusher: "Fuad",
    scout: "Koree",
    support: "Rusdi",
    carry: "Imoet"
}
        //* memisahkan antara ketua dan anggota
const {rusher: ketuaTeamPUBGM, ...anggotaTeamPUBGM} = roleInPUBGM;
function ekstractObjectValue(object) {
    let arrContainer = [];
    for ( const value in object){
        if(object[value] != "Fuad"){
            arrContainer.push(object[value]);
        }
    }
    return arrContainer.join(", ");
}
// console.log(`ketua: ${ketuaTeamPUBGM}, anggota: ${ekstractObjectValue(anggotaTeamPUBGM)}`);



    //* case 3, filtering
    //* menyaring value sesuai tipe datanya
function filter1By(type, ...values) {

    //* coba menggunakan for
    let hasil = [];
    for (let i = 0; i < values.length; i++){
        if(typeof(values[i]) === type){
            hasil.push(values[i]);
        }
    }
    return hasil;

}
console.log(filter1By("number", 1, 6, 2, 7, "krokotao", "bao", true, false, 9));

function filter2By(type, ...values){

    //* coba menggunakan for..of
    let hasil = [];
    for ( const element of values){
        if (typeof element === type){
            hasil.push(element);
        }
    }
    return hasil;
}
console.log(filter2By("string", 1, 6, 2, 7, "krokotao", "bao", true, false, 9));

function filter3By(tyoe, ...values){

    //* coba menggunakan method filter
    return values.filter( element => typeof element === type);
}

console.log(filter2By("boolean", 1, 6, 2, 7, "krokotao", "bao", true, false, 9));

