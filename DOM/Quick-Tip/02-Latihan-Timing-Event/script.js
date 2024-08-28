
// //* untuk mencari tanggal :
// const tanggalSekarang = new Date()
// // console.log(tanggalSekarang);
// //* untuk mencari waktu :
// const waktuSekarang = new Date().getTime();
// console.log(waktuSekarang); //* ini akan menampilkan dalam bentuk milisecond

//     //* program hitung mundur
// //* tetapkan waktu yang dituju, misal besok jam 15.00 / 3 sore
// // const endTime = new Date("Aug 29, 2024 15:00:00")   //* ini akan menampilkan dalam bentuk string, maka
// const endTime = new Date("Aug 28, 2024 15:34:00").getTime();    //* dan ini baru menampilkan dalam bentuk number milisecond
//             // console.log(endTime);       //* pengecekan
// //* cari waktu sekarang
// const currentTime = new Date().getTime();
// // console.log(currentTime);       //* pengecekan
// //* cari selisihnya
// const selisih = endTime-currentTime;
// console.log(selisih);       //* pengecekan

// //* mencari format
// //* hari:
// const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));       //* 1000 = 1 detik, 60 = 60detik/1 menit, 60 = 1jam, 24 = 1 hari
// //* jam
// // const jam = selisih / (1000 * 60 * 60);      //* yang dihilangkan cuma 24/hari-nya, karena sudah direpresentasikan di variabel hari
// const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) //* jadi gunakan operator modulus bukan operator bagi
//                                 //* Lalu akan menghasilkan milisecond, tinggal dibagi dengan JAM /(1000 * 60 * 60) = untuk menghasilkan jam
// //* menit
// const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))  //* untuk mencari menit, tidak perlu 24-nya dan hanya (1000 * 60) = per 1 detik dan per 1 menit;
// //* detik
// const detik = Math.floor(selisih % (1000 * 60) / 1000)     //* untuk mencari detik, hilangkan per-jamnya(60) (1000 * 60) cukup per 1 menitnya saja, dan dibagi dengan per 1 detik (1000ms);

// const tulisan = document.getElementById("text");
// tulisan.textContent = "Waktu anda tinggal : " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi!";






const endTime = new Date("Aug 28, 2024 16:48:00").getTime();      
        //* program hitung mundur, clean
const hitungMundur = setInterval(function(){
    const currentTime = new Date().getTime();
    const selisih = endTime-currentTime;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)) 
    const detik = Math.floor(selisih % (1000 * 60) / 1000)
    const tulisan = document.getElementById("text");
    tulisan.textContent = "Waktu anda tinggal : " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi!";

    if( selisih <= 0 ){
        clearInterval(hitungMundur);
        tulisan.textContent = "Waktu habis...";
    }
    
},1000);
