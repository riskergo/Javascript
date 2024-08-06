
        // declaration
function penambahan (a,b){
    return a + b;
}
console.log(penambahan(19, 21));

    // dengan konsep hoisting

pengurangan(20,10)             // panggil fungsi
function pengurangan(a,b){      // definisikan
    return console.log("declaration : " + (a-b) );
}

// itulah salah satu kelebihan function declaration



    // expression
// tidak sama dengan declaration
// expression HARUS didefinisikan terlebih dahulu agar bisa berfungsi
// tapi lebih powerfull
// banyak digunakan di framework
let perkalian = function (a,b){
    return console.log("expression : " + (a*b) );
}
perkalian(10,6)