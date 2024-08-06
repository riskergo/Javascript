
// keyword var dan let peruntukan scope-nya berbeda
// var lebih lebih tolerant terhadap scope
// sedangkan let tidak (strict). 


    // contoh 1
let i = 2;

if (i % 2 === 0){
    let genap = true;
    var genap2 = true;
}

if (genap2){        // tidak error, karena keyword var
    console.log("Bilangan Genap2!");
}

/* if(genap){      // akan error, karena scope let berbeda dengan scope var
    console.log("Bilangan Genap");
} */




    // contoh 2
// global scope / window scope
var a = 1;
// let a = 1;

// console.log("var "+a);   // 1
// console.log("let "+a);      // 1
/* console.log(window.a);  // 1 bila menggunakan keyword var
console.log(window.a);  // undefined bila menggunakan keyword let */




    // contoh 3
let b = 1;

function tes(){
    let c = 2;  // ini adalah function scope
    console.log(c)  // tidak error, karena scope-nya sama
    
    // coba 
    console.log(b); // ini bisa, walaupun scope-nya berbeda

    // jadi kesimpulannya :
    /* di dalam function, kita bisa mengakses variabel yang scope-nya global */
    /* sedangkan dari luar, kita tidak bisa mengakses variabel yang scope-nya function scope */
}
tes();
/* console.log(c); // error karena mencoba memanggil variabel dengan scope yang berbeda
 */




    // contoh 4
var a2 = 10;
// name conflict, tapi berbeda scope
// jadi tidak menimpa 

// var a2 = 11;
// kalau ini baru menimpa, karena scope-nya sama

// let a2 = 20;

function tes2() {
    // name conflict
    var a2 = 14;
    // ini sudah pasti mengacu pada variabel lokal
    console.log(a2);    // 14
    // kecuali
    console.log(" "+ window.a2);     // maka akan mengakses variabel global karena sintaks window    (ini terkhusus pada deklarasi menggunakan keyword var, bila let/const/class maka akan undefined)
}

tes2();
console.log(a2);    // 10




    // contoh 5
let angka3 = 22;

function tes3() {
    angka3 = 15;
    // di sini javascript akan mengecek apakah ada variabel dalam scope function ini
    // kalau ada, maka akan ditetapkan variabel lokal
    // kalau tidak ada, function javascript ini akan mengecek di luar scope ini
    // apa bila di scope luar ada, maka akan ditimpa(apabila sudah di-assign) / di-assign kalau hanya dideklarasikan
}
tes3();
console.log(angka3);    // 15, why?




// contoh 6
function tes4() {
    z = 32;
    // apabila di scope lokal ini tidak ada nama variabel z
    // maka javascript otomatis membuatkan variabel z secara global
    // ini akan mengotori scope global
    // hati-hati!
    // jika ingin hal ini tidak terjadi
    // gunakan "use strict"; di baris awal(pertama) source code
}

tes4();
console.log(z);




// contoh 7
let gb = 10;

function tes5(gb){
    console.log(gb);
}

tes5(13);   // lempar argument, bersifat lokal
console.log(gb);    // bersifat global
// seperti fungsi biasa





// contoh 8 

let j = 40;     // global

function tes6(j){       // ini lokal, karena di dalam parameter
    console.log(j);     // ini lokal karena merujuk ke parameter
}

tes(j);         // global, dan menginput variabel global ke dalam argument
console.log(j); // global, karena menginputkan variabel scope global

























