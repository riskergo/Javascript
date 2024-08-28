/* 
    //* Timing Event/Timing Function
    //* digunakan untuk mengatur kapan kita akan menjalankan kode pada program 
    //* atau memanipulasi waktu eksekusi pada program
        //* ada 2, yaitu setTimeOut() dan setInterval()
            //* setTimeOut digunakan ketika kita ingin menjalankan kode kita setelah menunggu waktu tertentu
            //* setInterval() digunakan ketika kita ingin menjalankan blok kode/program secara berulang-ulang (bisa terus menerus atau dalam jangka waktu tertentu)
            //* contohnya bisa membuat slide show / timer
*/


//* setTimeOut()    
//* setInterval()
    //* kedua function ini seharusnya bagian dari object window, maka seharusnya ditulis begini window.setTimeOut() / window.setInterval()
    //* karena window bersifat global, maka bisa saja ditulis tanpa window. Jadi keduanya merupakan event dari object window


/* 
    //* setTimeOut() memiliki 2 parameter, yaitu : 1. function yang ingin dijalankan, 2. waktu (dalam milisecond), contoh:
    //* setTimeOut(function(), 2000) --> salah, karena fungsinya ditambahkan tanda kurung, jadi langsung dijalankan, seharusnya:
    //* setTimeOut(function, 2000) --> benar, function-nya tidak ditambahkan tanda kurung, jadi function tersebut akan dijalankan setelah 2 detik(2000ms) selesai
    ? contoh rill:
*/
// tampilHello();  //* --> ini langsung dijalankan, karena tidak dimasukkan ke function setTimeOut();
// setTimeout(tampilHello, 2000);  //* --> fungsi dijalankan, tapi harus menunggu 2 detik dulu;
// function tampilHello(){
//     console.log("Hello");
// };
//* dan parameter pertama dari setTimeOut() bisa inputkan sebuah anonymous function
//* contoh:
// setTimeout(function(){
//     console.log("OK");
// },5000);
//* setTimeOut() bisa diberhentikan melalui function clearTimeOut();
//* contoh:
//* buat variabel yang memiliki value setTimeOut
// const tes = setTimeout(function(){
//     console.log("Halo");    
// },5000);    //* fungsi ini akan dijalankan setelah 5 detik, maka:

//* buat button untuk memberhentikan fungsi tsb
    //* tangkap button
// const capturedButton = document.getElementById("btn");
// capturedButton.addEventListener("click", function(){
//     clearTimeout(tes);  //* tambahkan fungsi memberhentikan timeout dan parameternya adalah variabel yg mengandung timeout
//     console.log("Diberhentikan");       //* cetak ke konsol sebuah notif
// })



/* 
    //* setInterval, menjalankan blok code/program tertentu secara berulang-ulang dengan interval waktu tertentu;
    //* maksudnya, blok code/program dijalankan, lalu nunggu bbrapa waktu, dijalankan lagi
    ? contoh rill:
*/
// * setInterval memilik 2 parameter, yaitu: setInterval(1. event handler (biasanya fungsi atau dsb), waktu Intervalnya);
// setInterval(function(){
    // console.log("Berjalan");     //* akan mencetak "Berjalan" ke konsol setiap 5 detik sekali, dan tidak akan berhenti
// }, 5000);   //* 5000 milisecond = 5 detik


//* simpan ke dalam variabel atau function expression untuk memberhentikannya
const interval = setInterval(function(){
    console.log("berjalan");
}, 3000);
// * untuk memberhentikannya, pakai event, contohnya ketika tombol di-klik
const capturedTombol = document.getElementById("btn");
capturedTombol.onclick = function(){
    clearInterval(interval);    //* gunakan ini untuk memberhentikan interval
    console.log("berhenti");
};