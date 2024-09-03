

    //* KONSEP EXECUTION CONTEXT, HOISTING, SCOPE

//* ini error
// console.log(nama); //* karena variabel nama tidak pernah didefinisikan
//* tapi, jikalau ditulis variabelnya seperti ini
// var nama = "Koree";     //* contohnya, menggunakan keyword var
//* hasilnya undefined dan tidak error, kenapa?
//* tapi kalau dibalik, maka akan tampil sebagaimana mestinya
//* penjelasan
    /* 
        //* saat program dijalankan yang terjadi adalah:
        //* creation phase atau fase kreasi/pembentukan
        //* fase ini terjadi di konteks global, karena kasusnya di sini kode programnya langsung ditulis melalui file javascriptnya
        //* tidak di dalam function (kalau di dalam function, beda lagi);
        //* CREATION PHASE pada GLOBAL CONTEXT
            //* yang terjadi pada fase ini adalah, javascript akan memeriksa apakah ada..
            //* variabel atau function di dalam codingan ini dan itulah yang pertama kali diperiksa oleh javascript, tidak peduli dgn yang lain
            //* cth, apakah ada keyword var / function, jika ada
            //* javascript akan membuat nama variabel tsb / meng-assign variabel tersebut menjadi undefined
            //* (apapun nama variabelnya) akan diisi dengan = undefined;
            //* semua variabel akan di-set terlebih dahulu isinya = undefined
                //* maka apabila console.log(nama) terlebih dahulu yang ditulis
                //* lalu var nama = "koree";
                //* variabelnya sudah ada, tapi isinya pasti undefined
                //* lalu, jikalau ada function, maka isi function itu akan berisi kode function itu sendiri
                //* KONSEP INI DISEBUT DENGAN HOISTING
                //* itulah yang terjadi pada fase kreasi/pembentukan
            //* dari 2 pendefinisian di atas
            //* javascript juga mendefinisikan object window = global object
            //* dan javascript mendefinisikan this = window
            //* cek di console, ketik window / this
            //* tapi selain dari itu tidak ada

                //* kesimpulan:
                    //* ada 2 object yang dibuat yaitu window dan this
                    //* dan kalau ada variabel, didefinisikan undefined terlebih dahulu
                    //* dan kalau ada function, diisi oleh tulisan/baris code function itu sendiri dan tidak dijalankan
                    
        //* EXECUTION PHASE
            //* maksudnya, mengeksekusi programnya dari atas ke bawah, kiri ke kanan
            //* dan menjalankan program tersebut
    */
//* contoh lain dari execution context dan hoisting

//* jikalau pemanggilan fungsi diletakkan di baris 48, maka akan terjadi konsep hoisting dalam execution phase

// console.log(sayHello)
//* jika ditambahkan kurung buka&tutup itu artinya langsung dijalankan, kalau tidak maka tidak langsung dijalankan
//* ini akan menampilkan isi fungsi tersebut berupa string, bahkan komentar yang terdapat di dalamnya

// console.log(sayHello())     //* variabel yang diinputkan ke function akan menghasilkan undefined

// var namo = "koree";
// var umur = 39;

//* beda lagi ketika creation phase sudah dijalankan lalu variabel tersebut di-assign dan fungsinya dipanggil
// console.log(sayHello())     //* variabel yang diinputkan akan sesuai sama value yang di-assign

// console.log(`halo, saya ${namo} berumur ${umur} tahun`);  //* ini akan menghasilkan undefined ketika dijalankan, karena sebuah function seharusnya mereturn sesuatu
    //* sebaiknya gunakan return seperti ini
// function sayHello(){
    //* test
    // return `halo, saya ${namo} berumur ${umur} tahun`;
// }

    //* di belakang layar yang terjadi adalah, creation phase terlebih dahulu dan..
    //* hoisting 2 variabel namo dan umur (di-assign undefined)
    //* dan isi function dengan tulisan/baris code function tersebut   
    //* jikalau fungsi dipanggil sebelum dibuat, tidak masalah karena akan hoisting tapi variabel akan bermasalah


//* jadi apa perbedaan global context dengan function?
    //* jika javascript menemukan function maka..
    //* javascript akan membuat local execution context sesuai function tersebut
    //* yang di dalamnya sama, terdapat juga
        //* fase creation dan fase execution
        //* bedanya ialah, jikalau local execution context kita dapat mengakses window/global
        //* juga bisa mengakses ARGUMENTS(object) atau yang diinputkan ke dalam PARAMETER dari function-nya
        //* apapun itu bentuknya/jenisnya 
        //* dan juga ada hoisting tapi lokal, javascript akan mengecek juga apakah ada variabel atau bahkan
        //* function juga (nested function)
        //* jika ada variabel, isi diisi terlebih dahulu dengan undefined pada fase creation
        //* jikalau sudah fase execution baru diisi dengan value/nilainya

    //* kasus 1
/* var nama = "Riski";
var usernameIG = "_riski.sap"

function cetakUrlInstagram(){     //* coba dihilangkan parameternya usernameIG, maka akan javascript akan memeriksa..
    var URL = "https://instagram.com/"
    //* prosesnya javascript akan memeriksa variabel local terlebih dahulu namun, bila tidak ada, javascript akan memeriksa bagian parameter/argument (cari dulu ke definisi variabel terdekat)
    return URL + usernameIG;    //*  namun variabel ini terdapat di scope global, maka javascript akan memilih variabel tersebut, jadi hasilnya tetap _riski.sap tapi bila tidak ada, maka akan menampilkan error
    //* tapi argument yang dilempar(korates2) tapi tidak ada yang menangkap di fungsi ini tapi..
    //* tetap tersimpan di pseudo variabel bernama ARGUMENTS yang berbentuk array
        //* dan ini disebut SCOPE
    // console.log(arguments[1]);       //* korates2
}

console.log(cetakUrlInstagram("korates2"));    //* jika argument-nya berlebih, maka akan disimpan ke dalam sebuah object arguments */


//* setiap function dipanggil, akan membuat local execution context yang baru
//* dan ditambahkan execution stack / tumpukan eksekusi
//* setelah fungsinya selesai dijalan maka execution context dihilangkan dari tumpukannya atau dihilangkan dari memory


    //* kasus 2
/* function a(){
    console.log("ini a")

    function b(){
        console.log("ini b");

        function c(){
            console.log(`ini c`)

        }

        c()
    }

    b()
}

a(); */
//* cek melalui javascript visualizer python tutor
    //* tahap pertama ialah hoisting, pengecekan apakah ada variabel ataupun function
    //* jika kasusnya ada function di dalam function, maka akan menimbulkan execution stack / tumpukan eksekusi
    //* setelah semua function selesai dijalankan, maka tumpukan eksekusi hilang / dihapus 



//* kasus 3
function satu(){
    var nama = "koree";
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = "Rusdi"
satu()
dua("fuad");    //* ini terdapat di arguments function dua, karena console.log(nama) di function 2 merujuk ke scope global
console.log(nama);