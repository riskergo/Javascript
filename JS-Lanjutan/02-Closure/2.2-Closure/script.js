//* Closure

/* 
        //* mdn
    //* closure adalah kombinasi function dan lexical scope di dalam function tersebut

        //*w3school
    //* closure adalah sebuah function yang memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai dieksekusi

        //* techsith
    //* closure adalah sebuah function yang sudah memiliki data, hasil dari function yang lain


    //* lexical scope adalah sebuah istilah ketika sebuah inner function / closure memiliki akses hingga ke global object atau window

    //* ketika inner function memiliki akses ke parent scopenya, ini disebut closure

*/


//* contoh kode

function init(){
    let nama = "DOGS"

    //* tambahan data untuk closure
    // let harga = 15

    function tampilNama(){
        console.log(nama);
        // console.log(harga);
    }

    // console.log(tampilNama());      
    // console.dir(tampilNama) //* untuk memeriksa object
    //* cek di scopes lalu closure, maka akan terlihat variabel yang membutuhkan data dari luar function tersebut

    // tampilNama();       //* langsung dijalankan
    return tampilNama;  //* return, tapi tidak dijalankan (mengembalikan tanpa menjalankan) tidak tampil apa
    //* istilahnya function baru jalan sebagian, bagaimana agar tampilNama jalan?

    //* algoritmanya:
    /* 
        //* init dipanggil, tapi hanya sebagian yang dijalankan karena di dalam function init, me-return function tampilNama
    */
}
// init();

//* simpan ke variabel
let panggilNama = init();
// panggilNama()        //* lalu panggil, barulah muncul di console
//* ini memungkinkan kita agar bisa melakukan function factory

//* contoh function factories
function init2() {
    // let nama = "test" //* tidak perlu jika yang diinputkan oleh user
    
    //* versi ringkasnya
    return function (nama){     //* anonymous function
        console.log(nama);
    }
}

let panggilNama2 = init2();
// panggilNama2("Fuad")
// panggilNama2("Bampuki");



//* alasan menggunakan closure
    //* untuk membuat function factories
    //* untuk membuat private method


//* function factory

//* outer function

function ucapkanSalam(waktu){
    //* waktu untuk memberitahukan waktu

    //* inner function
    return function(nama){
        console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }

}

let selamatPagi = ucapkanSalam("pagi");     //* variabel penunjuk waktu yang berisi outer function yang dijalankan
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");
        // * artinya kita membuat function hasil dari function yang lain

//* cara menjalankannya
//* parameter untuk inner function, yaitu nama
// selamatPagi("Koree");       //* menjalankan inner function dari variabel yang berisi outer function 
// selamatMalam("Bampuki")


//* pengecekan
// console.dir(selamatMalam);  //* setengah dari function ini sudah berjalan, cek di closure, ada variabel waktu:malam
        //* dan tinggal menunggu data dari namanya, inputkan melalui parameter function expression tsb
// console.dir(selamatMalam("Badut"))
            //* jadi, function factory adalah membuat function sesuai dengan function yang lain



    //* private method / variabel

//* contoh variabel dapat diubah ketika fungsi dijalankan, tetapi ada kekurangan

let counter = 0;
let add = function(){       //* buat dengan function expression
    // return counter++;   //* tidak ditambah dahulu, karena ++ di akhir
    return ++counter;   //* ditambah dahulu, lalu di-return
}

//* kekurangannya ada di sini;
counter = 10;  //* ketika baris code sudah banyak dan variabel counter di-assign ulang
//* karena efek hoisting, variabel counter tersebut berubah

// console.log(add());
// console.log(add());
// console.log(add());


//* bagaimana solusinya?
//* coba menggunakan ini

let add2 = function(){
    let counter2 = 0;       //* masukkan variabel counter ke dalam function
    return ++counter2;
}
//* dan apabila di-assign kembali variabel counter2
counter2 = 0;
//* maka tidak akan mengganggu variabel counter2
//* coba panggil
// console.log(add2());
// console.log(add2());
// console.log(add2());

//* tetapi, ada yang janggal, variabel counter tetap 1, karena ketika function dipanggil
//* variabel counter2 selalu di-set 0
//* cek console


//* coba pakai CLOSURE
let add3 = function(){
    let counter3 = 0;
    return function(){
        return ++counter3;
    }
}

// console.log(add3());        //* yang tampil hanya inner functionnya karena inner function belum dijalankan
//* yang baru dijalankan hanya outer function, jadi gunakan seperti ini, masukkan ke sebuah variabel
let cobaPrivateMethod = add3();
// console.log(cobaPrivateMethod());   //* 1
// console.log(cobaPrivateMethod());   //* 2
// console.log(cobaPrivateMethod());   //* 3
//* jadi counter di innerfunction akan selalu mengacu ke variabel di dalam outer function


//* tapi jika dilihat-lihat, agak aneh karena harus membuat variabel untuk menjadi wadah
//* ada caranya agar function otomatis dijalankan tanpa harus membuat variabel
//* caranya
let add4 = (function(){
    let counter4 = 0;
    return function(){
        return ++counter4;
    }
})();       //* penjelasannya:
    //* tambahkan kurung untuk membungkus function dan seisinya, lalu tambahkan kurung setelahnya(akhirnya) (Baris 172);
    //* istilahnya: immediately invoke function
    //* pada saat di-assign ke variabel add4 dia langsung menjalankan innerfunctionnya

//* dan apabila variabel counter4 di-assign lagi, maka counter4 di function add tidak terpengaruh
counter4 = 10;

console.log(add4());
console.log(add4());
console.log(add4());






































