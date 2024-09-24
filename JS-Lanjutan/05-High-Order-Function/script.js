

// //* coba high order function

let matkul1 = "Algoritma Pemrograman";

function kerjakanTugas(mataKuliah, selesai){        //* selesai adalah callback, karena parameter yang diinputkan adalah function
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
    selesai();
};

//* 
function selesai(){
    setTimeout(function(){
        alert(`tugas ${matkul1} Selesai`)
    }, 1000);
};


// //* coba panggil:
// kerjakanTugas(matkul1, selesai);


// //* coba high order function pada closure

// function ucapSalam(waktu){
//     return function(nama){
//         console.log(`Selamat ${waktu} wahai ${nama}`);
//     }
// }

// //* coba panggil
// let waktuMalam = ucapSalam("Malam");
// waktuMalam("Koree");


//* coba 
// let total = 0, count = 1;

// while(count <= 10){
//     total = count;
//     // count++;
//     //* or
//     count += 1;
// }
// console.log(total);

//* ubah ke high order function 
