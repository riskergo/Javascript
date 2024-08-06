// contoh kasus
function tambah(a,b){
    return a + b;
}
// saat fungsi dipanggil
// argument yang dikirim lebih banyak daripada parameter
// maka argument tersebut diabaikan
let h1 = tambah(10,5,20)
// di sini angka 20 diabaikan


// contoh kasus 2
function kali(a,b,c){
    console.log(c);     // ini undefined
    return a * b * c    // maka hasilnya akan NaN
}
// saat fungsi dipanggil
let h2 = kali(2,3);
// argument yang dikirim lebih sedikit daripada parameter
// maka nilai PARAMETER tersebut akan diubah menjadi nilai default
// atau UNDEFINED
/* cek : */ console.log(h2);




                // ARGUMENTS atau ARRAY
// pada contoh kasus argument yang dikirmkan lebih banyak daripada parameter
// sebenarnya, argument yang berlebih itu disimpan ke dalam arguments/ARRAY
// contoh
// buat sebuah fungsi
function kurang(a,b){
    console.log(arguments[2])
    // karena arguments adalah sebuah array
    // maka cara mengeceknya melalui index, di sini index-nya 2 karena parameter hanya 2 (dimulai dari index 0)
    return a - b;
}
// lempar argument yang berlebih;
let h4 = kurang(20,5,8);
// karena parameter hanya 2, maka angka 8 disimpan ke dalam pseudo-variable ARGUMENTS

// dengan adanya variabel semu ARGUMENTS, maka dapat membuat fungsi lebih dinamis
// contoh :
function tambahDynamic(){

    // buat variabel untuk menampung hasil tambah
    // assign menjadi 0, agar tidak undefined.
    // INGAT variabel yang telah dibuat tapi tidak di-assign value-nya maka akan ditetapkan menjadi default value, yaitu UNDEFINED
    // apabila itu terjadi, hasilnya akan NaN;
    let hasil = 0;
    
    
    // gunakan loop
    // dan gunakan property length dari sebuah array
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }

    // kembalikan nilai
    return hasil;
}

// fungsi yang dinamis, tidak perlu mengatur parameter
// karena pseudo variabel ARGUMENTS dalam sebuah fungsi
console.log(tambahDynamic(3,4,6,8));