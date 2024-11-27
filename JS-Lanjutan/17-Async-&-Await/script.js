

/*
    * apa itu async function?
    * adalah sebuah fungsi yang bekerja secara asynchronous (melalui event loop) yang menghasilkan implisit promise sebagai return value-nya
    * tapi secara penulisan menggunakan penulisan yang synchronous (standar)
        * fungsi yang berjalan secara asynchronous
        * menghasilkan promise (implisit)
        * penulisannya sama dengan penulisan synchronous (fungsi biasa)
*/


//* promise sederhana

const promise1 = new Promise( resolve => resolve("OK DEK!"));
// console.log(promise1);

// const promise2 = new Promise( resolve => {
//     setTimeout( ()=> {
//         resolve("OK DEK!");
//     }, 2000 );
// });
// console.log(promise2);  //* pending
// promise2.then( () => console.log(promise2));

function cobaPromise1(){
    return new Promise( resolve => {
        setTimeout( ()=> {
            resolve("OK DEK!");
        }, 2000 );
    });
}

// const tryPromise1 = cobaPromise1();     //* karena coba promise adalah asynchronous
// console.log(tryPromise1);   //* maka ini hasilnya pending
// tryPromise1.then( responseTryPromise => console.log(responseTryPromise));   //* fulfilled / resolve
//* apa bedanya dengan yang dilakukan sebelumnya (di atas), ini belum bisa menggunakan async dan await


//* synchronous
function cobaAsync(){
    const tryPromise = cobaPromise1();
    console.log(tryPromise);    //* pending
}
// cobaAsync();

//* menerapkan async dan await :
async function cobaAsync2(){
    const tryPromise = await cobaPromise1();
    console.log(tryPromise);
}
// cobaAsync2();


/* 
    * bagaimana melakukan error handling pada script async dan await
    * jika menggunakan promise, kita bisa menangkap error/rejected(reject) menggunakan method catch dan menangkap fulfilled(resolve) menggunakan method then
    * 

*/

function cobaPromise2(){
    return new Promise( (resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout( ()=> {
                resolve("OK-DEK!");
            }, waktu);
        }else {
            reject("LAMO-DIAK!");
        }
    });
}

// const tryPromise2 = cobaPromise2();
// tryPromise2
//     .then( responseResolve => console.log(responseResolve))
//     .catch( responseError => console.error(responseError) );


/* 
    * bagaimana caranya menerapkan hal tsb (error handling) di async dan await?
    * di dalam async function tidak bisa menggunakan then/catch karena 
    * yang dijalankan diasumsikan promise-nya resolve (asumsinya), bagaimana ketika promisenya reject?
*/

async function cobaAsync3(){
    // const tryPromise = await cobaPromise2();    //* diasumsikan resolve, tapi ketika reject, bagaimana cara menghandle-nya?
    // console.log(tryPromise);  //*   ubah kondisi waktu menjadi >= 5000
    //* hasilnya uncaught atau tidak tertangkap data-nya
    //* supaya tertangkap, gunakan blok dengan keyword try and catch
    try {
        //* isi blok ini untuk yang resolve 
        const tryPromise = await cobaPromise2();
        console.log(tryPromise);
    } catch(errorNya){  //* kalau catch ada parameter-nya untuk menampung data reject
        //* pesan yang ada di dalam reject, masuk ke dalam pesan(parameternya) catch 
        console.error(errorNya);
    }
}
cobaAsync3();