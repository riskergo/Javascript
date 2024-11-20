

/*
    * callback adalah:
    * sebuah function yang dikirimkan ke parameter pada function yang lain
    * karena parameter sebuah function bisa menerima macam-macam seperti array, object, int, array
    * bahkan function
    * pengertian callback versi lain, callback adalah sebuah function yang dieksekusi setelah fungsi lain selesai dijalankan
    * ?
*/


//* synchronous callbacks  (jarang digunakan)
// function halo(strNama){
//     alert(`Halom ${strNama}`)
// }

// function tampilkanPesan(fnCallback){
//     const nama = prompt("Masukkan Nama: ");
//     fnCallback(nama);
// }
// tampilkanPesan(halo);
    //* versi anonymous function with arrow function
// function tampilkanPesan(fnCallback){
//     const nama = prompt("Masukkan Nama: ");
//     fnCallback(nama);
// }

// tampilkanPesan( nama => alert(`Halo ${nama}`) );

//* asynchronous callback

    //* anggapannya adalah json
/* const mhs = [
    {
        "nama": "Koree Antonio",
        "nrp": "931921",
        "email": "KAOROK@mgao.com",
        "jurusan": "Irony",
        "idDosenWali": 1
    },
    {
        "nama": "Rusdi Barber",
        "nrp": "34199",
        "email": "goaks@sdao.com",
        "jurusan": "JMK48",
        "idDosenWali": 2
    },
    {
        "nama": "Fuad Entog",
        "nrp": "36542",
        "email": "kokontoaAG@apsld.com",
        "jurusan": "duri-dumai",
        "idDosenWali": 3
    }
]; */

//* pengecekan
// console.log("mulai");
// mhs.forEach( element => {
//     for ( let i = 0; i < 9000000; i++){
//         let date = new Date();
//     }
//     console.log(element.nama)
// } );
// console.log("selesai");     //* synchronous



//* contoh asynchronous, mengambil data dari api/database lain

//* Asynchronous Callback (Vanila Javascript)
    //* membuat function yang ketika function tsb dijalankan akan me-request data menggunakan ajax

// function getDataMahasiswa(url, fnIfSuccess, fnIfError){

//     let xhr = new XMLHttpRequest(); 

//     xhr.onreadystatechange = function(){

//         if(xhr.readyState === 4){
//             if( xhr.status === 200){
//                 fnIfSuccess(xhr.response);
//             }else if(xhr.status === 404){
//                 fnIfError()
//             }
//         }
//     }

//     xhr.open( 'get', url );
//     xhr.send();
// }

//* jika tidak ingin mengggunakan 2 function ini, maka
// function success(){
// }
// function error(){
// }
//* gunakan anonymous function dengan arrow function

//* jika dijalankan menggunakan ekstension vscode LiveServer, maka tidak akan error
//* kalau tidak dijalankan menggunakan ekstension tersebut, akan memunculkan error
//* artinya, harus dijalankan ke dalam web server seperti xampp/apache

// console.log("Mulai");
// getDataMahasiswa('./data/mahasiswa.json', result => {
//     console.log();
//     const dataNamaMahasiswa = JSON.parse(result);
//     dataNamaMahasiswa.forEach( elementNama => console.log(elementNama.nama) );
// }, () => {});   //* akan tampil ke console walaupun dalam bentuk teks
//* jadi apa bedanya? di sini Asynchronous dari yang di atas, untuk pengecekannya gunakan console.log("Mulai") dan console.log("Selesai")
// console.log("Selesai");

//* Asynchronous Callback menggunakan JQuery

console.log("Mulai")
//* dengan menggunakan JQuery, cukup panggil method bernama ajax
$.ajax( {
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        // console.log(mhs);
        mhs.forEach( element => console.log(element.nama) );
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log("Selesai");