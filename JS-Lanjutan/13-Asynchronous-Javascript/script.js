

/* 
    * Keyword Asynchronous Javascript
        * Callback
        * Promise
        * Ajax
        * Async & Await
*/


/* 

    * single thread, hanya bisa menyelesaikan tugas satu per satu secara berurutan dengan 1 thread saja
    * multi thread, bisa menyelesaikan tugas satu per satu dan berurutan juga tetapi dengan memanfaatkan lebih dari 1 thread
    
    * blocking, tidak bisa mengerjakan task berikutnya jika task saat ini belum selesai (harus diselesaikan terlebih dahulu)
    * non-blocking, bisa mengerjakan task berikutnya walaupun task saat ini belum selesai

    * synchronous, mengerjakan task berurutan
    * asynchronous, jika saat ini task 1 pertama belum selesai thread tetap bisa pindah untuk mengerjakan task selanjutnya.
        *  Apabila task 2 juga belum selesai thread pindah lagi ke task 1 dan jika task 1 juga belum selesai maka pindah lagi ke task 2 hingga kedua task tersebut selesai;
        * atau lebih mudahnya ketika suatu tugas berjalan secara asinkron, tugas tersebut bisa berjalan di latar belakang tanpa menunggu tugas itu selesai untuk melanjutkan proses berikutnya 
        * di atas adalah contoh asynchronous single threaded dan pada asynchronous multi threaded task akan disebarkan ke beberapa thread dan dikerjakan bersamaan (paralel) dalam satu waktu tertentu

    * concurrent : asynchronous + single-threaded
    * parallelism : asychronous + multi-threaded
    
    
    * konklusi:
        * single thread & multi thread : lingkungan pengerjaan task, entah itu dikerjakan menggunakan 1 thread atau banyak thread
        * blocking & non-blocking: teknik ngoding, berhubungan dengan input dan output (ketika tombol di-klik, mengerjakan sebuah fungsi yang kompleks dll)
        * Synchronous dan Asynchronous: mirip dengan blocking&non-blocking tetapi sync dan async berhubungan dengan request http (ajax)
        * concurrent dan parallel : lingkungan eksekusi task mirip dengan single atau multi thread dan berhubungan dengan infrastruktur, virtualisasi dan hardware

    * Javascript itu single-threaded tapi bisa non-blocking dan asynchronous
*/

    /* 
        * heap, memory allocation atau tempat penyimpanan variable, function (hoisting).
        * stack, pemanggilan function dan eksekusi kode (execution context dan function call)
    
    */

            
    //* stack
        //* tempat pada V8 Engine, digunakan untuk mengeksekusi kode program

    //* WEB API
        //* tempat mengelola Asynchronous Callbacks

    //* Callback Queue
        //* setelah waktu tunggu, tombol di-klik(DOM), fetching data selesai diambil dari API tujuan (ajax), Asynchronous callback akan dimasukkan ke dalam bagian ini

    //* event loop
        //* bertugas untuk memeriksa apakah ada callback di dalam callback queue, jika ada pindahkan callback-nya ke dalam stack
        //* tapi dengan syarat, stack harus kosong 

//* contoh kode 
console.log("Satu");
        //* Asynchronous callback, ada beberapa fungsi yang bersifat asynchronous, salah satunya adalah setTimeOut()
    setTimeout( () => {
        console.log("Dua");
    }, 5000 );
        //* bisa terjadi karena adanya event loop
    console.log("Tiga");
