// * konsep this pada arrow function

// * constructor function
// const Mahasiswa = function(){
//     this.nama = "gege";
//     this.umur = 10;

    // console.log(this);

//     this.sayHello = function(){
//         console.log(`halo nama gumha ${this.nama} dan saya berumur ${this.umur} tahun`);
//     }
// };
// //* instansiasi object

// const gege = new Mahasiswa();


// * konversi ke arrow function, untuk melihat konteks keyword this-nya
// * tidak semua function bisa diubah menjadi arrow function
// const Mahasiswa = function() {
//     this.nama = "korea";
//     this.umur = 13;

//     //* tetapi untuk method bisa diubah menjadi arrow function
//     this.sayHello = () => {
//         console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);
//     }
//     //* sebenarnya arrow function tidak menyimpan konsep this, maka function tersebut akan mencari ke luar
// };

// const korea = new Mahasiswa();

// * arrow function terlihat sama seperti function declaration / expression


// * tapi akan berbeda jika kita membuat object dengan menggunakan object literal


// const mhs1 = {
//     nama: "bampukiers",
//     umur: 13,
    // sayHello: function() {
    //     console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);  //* ini tidak undefined
    //     //* karena akan mencari ke lexical scope-nya atau mencari ke luar scope method ini
    // }
    // sayHello: ()=> {
    //     console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);  //* undefined karena arrow function tidak memiliki konsep this
    // }

//     //* jika ingin menggunakan arrow function, gunakan tanpa keyword this tetapi gunakan nama objectnya
//     sayHello: () => {
        // console.log(`Woy nama gumha ${mhs1.nama} dan gumha berumur ${mhs1.umur}`); 
//         console.log(this);      //* ini mencari ke object window karena tidak ada di dalam object mhs1
//     }
// }


//* contoh kasus lain
const Mahasiswa = function() {
    this.nama = "okare";
    this.umur = 12;
    this.sayHello = function() {
        console.log(`yo man ${this.nama} im ${this.umur} year old`)
    }

    //* di sini terdapat perbedaan konsep hoisting pada pembuatan function
    //* dengan menggunakan function expression functionnya disimpan kedalam variabel dan tidak kena hoisting
    //* dengan menggunakan function declaration akan meng-hoisting dan karena hoisting, function declaration akan mengecek variabel value di scope global-nya

    //* contoh:
    // setInterval(function () {       //* menggunakan function declaration
        // console.log(this.umur++);       //* NaN karena mencari this di scope tidak ada, maka mencari di scope global
    //     //* coba gunakan ini
        // console.log(Mahasiswa.umur) //* undefined 
    // }, 500)

    //* untuk mengatasinya, gunakan arrow function
    // setInterval(() => {          //* karena arrow function tidak punya konsep this, maka akan mencari di lexical scope-nya atau diluarnya satu tingkat, bukan di global
    //     console.log(this.umur++);
    //     console.log(this)        //* pengecekan
    // }, 700);
    

}

const satu = new Mahasiswa();


