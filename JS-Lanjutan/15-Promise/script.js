
//* request api dengan library JQuery (ajax)
/* $.ajax({
    url: "http://www.omdbapi.com/?apikey=27c7497b&s=fury",
    success: movies => {
        console.log(movies.Search);
    },
    error: e => {
        console.log(e.responseText);
    }
}) */

//* request api dengan vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response).Search);
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', "http://www.omdbapi.com/?apikey=27c7497b&s=fury");
// xhr.send();

//* menggunakan fetch
// const movies = fetch('http://www.omdbapi.com/?apikey=27c7497b&s=fury')
// console.log(movies);
/* fetch("http://www.omdbapi.com/?apikey=27c7497b&s=fury")
    .then(response => response.json())
    .then(response => console.log(response.Search));

fetch("http://www.omdbapi.com/?apikey=27c7497b&s=fury")
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response.Search);
    }); */
//* fetch mengembalikan promise, dan apa itu promise?


//* PROMISE
/* 
    * apa itu promise? janji

    * sebuah OBJECT yang merepresentasikan sebuah keberhasilan / kegagalan sebuah event yang asynchronous yang akan terjadi di masa akan datang

    * janji itu akan (terpenuhi / ingkar)

    * states/keadaannya (fulfilled=dipenuhi / rejected=diingkari / pending=waktu tunggu sebelum janji terpenuhi / tidak)

    * untuk menjalankan tiga keadaan di atas, ada fungsi callback yaitu (resolve = ketika janji terpenuhi / true, reject = ketika janji diingkari / false, finally = ketika waktu tunggunya selesai baik janjinya dipenuhi/tidak)

    * terdapat aksi yang akan dilakukan ketika promise terpenuhi atau tidak (then = terpenuhi lalu akan menjalankan resolve, catch = tidak terpenuhi lalu akan menjalankan reject)

    * biasanya promise digunakan untuk request ke API 
*/
// * implementasi sederhana
    //* contoh 1
let promisedState = true;
let promisedState2 = false;
// const janji1 = new Promise( (resolve, reject) => {
//     /* 
//     * menambahkan kondisi, boolean value
//     * contoh menggunakan sebuah variabel bertipe boolean
//     * defaultnya adalah resolve
//      */
//     if (promisedState2) {
//         resolve("promise ditepati"); //* di sini contohnya menjalankan/return string yang simple saja, tetapi
//         /* 
//             * sebenarnya bisa menjalankan fungsi yang kompleks atau request ke API
//          */
//     }else {
//         reject("promise diingkari");
//     }
// });

 
//* menjalankan secara langsung
// console.log(janji1);    //* defaultnya jika dijalankan akan resolve dan valuenya adalah isi resolve itu tersebut

//* menangkap resolve atau reject, jalankan console.log di dalam method then atau catch
// janji1
//     .then( response => console.log(`OK! ${response}`) )  //* nama callback bisa bebas       ; resolve ditangkap oleh then
    // .catch( response => console.log(`Not OK! ${response}`) );    //* chaining, jika gagal    ; reject ditangkap oleh catch
// * coba ubah value promisedState menjadi false maka catch yang akan dijalankan
/* 
    * alurnya, jika promisedState diubah menjadi false, maka object janji1 akan memeriksa kondisi false dan masuk ke else lalu akan diambil oleh method catch
*/  

    //* contoh2
//* membuat promisenya tidak langsung resolve, tetapi menunggu beberapa waktu dahulu karena
//* mungkin datanya banyak atau prosesnya kompleks

/* const janji2 = new Promise( (resolve, reject) => {
    if(promisedState) {
        setTimeout( () => {
            resolve("Promise ditepati setelah beberapa waktu");
        }, 2000 );
    }else {
        setTimeout( () => {
            reject("Promise tidak ditepati setelah beberapa waktu");
        }, 2000 );
    }
}) 
//* supaya terlihat asynchronous
console.log("Mulai");

console.log(janji2) //* pending, karena tidak menjalankan method then-nya
// console.log(janji2.then( ()=> console.log(janji2) )); //* penjelasannya :
//*   |promise mulai dijalankan| |promise selesai|       //* setelah 2 detik baru dijalankan, awalnya pending (nunggu 2 detik) lalu selesai

//* jika ditulis seperti ini:
janji2
 .finally( ()=> console.log("Selesai Menunggu!") ) //* method finally dijalankan ketika method then/catch sudah siap untuk dijalankan atau lebih tepatnya method finally dulu dijalankan lalu then/catch
    //* method finally bisa digunakan ketika menambahkan animasi loading, jadi ketika promise-nya mulai berjalan lalu animasi loadingnya dijalankan
    //* begitu finally, matikan animasi loadingnya  
 .then( response => console.log(`OK! ${response}`) )
 .catch( response => console.log(`NOT OK! ${response}`) );   //* pending tidak terlihat karena yang langsung dijalankan adalah yang di dalamnya

console.log("Selesai"); */

//* terakhir, promise.ALl, untuk menjalankan banyak promise secara sekaligus

let benar = true;
let salah = false;
const movies = new Promise( (resolve, reject) => {
    if( benar ){
        setTimeout( ()=> {
            resolve([{
                title: "GG",
                director: "SA",
                actor: "GG2"
            }])
        }, 1000);
    }else {
        setTimeout( ()=> {
            reject(`Takdo Cik`);
        }, 1000);
    }
} )


const cuaca = new Promise( (resolve, reject) => {
    if(salah){
        setTimeout( ()=> {
            resolve([{
                kota: "Zizibaba",
                temp: 33,
                kondisi: "Cerah" 
            }]);
        }, 500 );
    }else {
        setTimeout( ()=> {
            reject("Takdo Cik");
        }, 500 );
    }
} )

//* cara menjalankannya, versi 1
/* movies
    .then(response => console.log(response))
    .catch(response => console.log(response))

cuaca
    .then(response => console.log(response) )
    .catch(response => console.log(response)) */
//* jika mempunyai 5 API, harus menjalankannya 1 per 1

//* dan jika ingin menjalankannya sekaligus, gunakan promise.All

Promise.all([movies, cuaca])
    .then(response => console.log(response))   //* tampil dalam bentuk array yang tergabung, 
    .catch( response => console.log(response))

//* jika ingin yang terpisah, gunakan destructuring variable / unpack array/obj ke variabel terpisah
Promise.all([movies, cuaca])
    .then ( response => {
        const [movies, cuaca] = response;
        console.log(movies);
        console.log(cuaca);
    } )
    .catch( response => {
        console.log(response);
    } ) 
