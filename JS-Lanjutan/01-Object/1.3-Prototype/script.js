
//* function constructor
function Mahasiswa(nama, energi){

    /* 
        //* apabila menggunakan constructor funciton yang terjadi di belakang layar adalah
            //* let this = {};
            //* let this = Object.create(Mahasiswa.prototype)   
        //* maka secara default, constructor function sudah memiliki parent, yaitu prototype
        //* tidak perlu lagi membuat object baru/object lain yg dijadikan sebagai parent
    */

    this.nama = nama;
    this.energi = energi;

    /* 
        //* dan ini
            //* return this
    */
}

//* untuk mengelola prototype, ketik sintaks seperti ini
//* namaConstructorFunction.prototype.namaFunction = function(){};
Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Selamat makan ${this.nama}`;
};

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Selamat bermain ${this.nama}`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Selamat tidur ${this.nama}`;
}

let mhsKoree = new Mahasiswa("Koree", 2);
//* konsep di atas disebut prototyple inheritance atau disebut juga pewarisan yang menggunakan prototype
//* ini mirip dengan konsep class atau OOP, tapi bisa dikonversi menjadi seperti sebuah class


    //* VERSI CLASS
class Manusia {
    //* jika ingin membuat property, gunakan constructor
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    //* jika ingin membuat method-nya, seperti ini syntax-nya
    bekerja(jam){       //* tidak memerlukan keyword function, langsung saja nama method-nya
        this.energi -= jam;
        return `Selamat bekerja ${this.nama}`;
    }

    istirahat(jam){
        this.energi += jam / 2;
        return `Selamat istirahat ${this.nama}`;
    }

    makan(porsi){
        this.energi += porsi;
        return `Selamat makan ${this.nama}`;
    }

    tidur(jam){
        this.energi += jam;
        return `Selamat tidur ${this.nama}`;
    }
}

//* untuk membuat instansiasi-nya sama saja seperti constructor function
let mnsRusdi = new Manusia("Rusdi", 12);
//* untuk memanggil functionnya sama saja dengan konsep prototyple inheritance di atas
//* dam apabila diperiksa melalui console maka ini akan mirip seperti prototyple inheritance, karena sudah ada prototype-nya langsung


        //* Dan apa perbedaannya dengan versi prototype yang tadi?
        //* sebetulnya versi class, di belakang layar class menjalankan versi prototype
        //* jadi versi class hanya menjadi pembungkus agar lebih tertata rapi dan masuk akal saja


//* dan sebetulnya type data array, number dll di javascript merupakan object yang mempunyai prototype

//* contoh, untuk array
let testArray = [1,2,3];
/* 
    //* sebenarnya array adalam object di javascript, karena di belakang layar terjadi:
        //* let testArray = new Array()
        //* dan new Array adalah sebuah constructor function
        //* maka ada function Array(){} dan di dalamnya ada:
        //* let this = Object.create(Array.prototype)
*/
// console.log(testArray.reverse());      //* .reverse adalah prototype dari object Array
//* atau
let testArray2 = [5,7,1,4];
// console.log(testArray2.sort());         //* dan .sort juga prototype dari object Array

//* cek prototype melalui console
console.log(testArray);
console.log(testArray2);
//* jadi array-array di atas mewarisi semua method dari object array


//* untuk memeriksanya, gunakan console dan ketik Array.prototype, Number.prototype, dan Object.Prototype