
/* 
    * spread operator
        * berfungsi untuk memecah (expand / unpack) iterables menjadi single element
        * iterable object :
            * String
            * Array
            * Arguments
            * Nodelist
            * Typed Array
            * Map
            * Set
            * User-defined Iterables
*/

//* contoh
    //* array
    // const mhs = ["koree", "pant", "ek", "gg", "irony"];
    // console.log(mhs);
    // console.log(...mhs);

    //* string
    // console.log(...mhs[0])


//* contoh penggunaan

        //* menggabungkan 2 array
        const mhs = ["koree", "pant", "ek", "gg"];
        const dosen = ["kimak", "iroy", "misterI", "rusdi"];
        const orang = [...mhs, ...dosen];
        // console.log(orang);
        //* jikalau begini
        const orang2 = [mhs, dosen];  //* akan berisi array di dalam array
        // console.log(orang2);    
        //* untuk menggabungkan 2 array, bisa menggunakan cara lain
        const orang3 = mhs.concat(dosen);
        // console.log(orang3)
        //* tetapi tidak fleksibel jika begini
        const orang4 = [...mhs, "kukuntols" , ...dosen];  //* if you want to add array in the midst / ingin menambahkan elemen array di tengah-tengah
        // console.log(orang4);
        
        //* melakukan copy pada array
        const mhsGG = ["irony", "mister", "kuantols"];
        const mhsGGcp = mhsGG;
        //* problemnya jika melakukan cara seperti di atas, cara di atas tidak melakukan copy, tetapi
        //? mhsGGcp[0] = "koantolegs";      //* di sini harapannya yang berubah hanya array copy-annya saja ( mhsGGcp)
        /*  
            * tetapi, array mhsGG juga ikut berbuah, mengapa?
            * karena, jikalau melakukan cara di atas artinya membuat reference-nya (pass by reference jikalau di c++)
            * atau lebih jelasnya [ variabel array mhsGGcp merujuk ke nilai/value dari variabel array mhsGG ]
            * jadi tidak benar-benar meng-copy
            * jadi gunakan cara ini
        */
        const mhsGEGEcp = [...mhsGG];
        mhsGEGEcp[0] = "kontaols";
        // console.log(mhsGGcp);
        // console.log(mhsGG);         //* array awalnya tetap
        // console.log(mhsGEGEcp);

//* contoh kasus 1
const nameList = document.querySelectorAll("li");
// console.log(nameList);      //* nodelist
// console.log(nameList[0].textContent);   //* mengambil text content

//* tiap-tiap textContent akan dimasukkan ke dalam array
const arrName = [];

    //* dengan for biasa
for( let i = 0; i < nameList.length; i++){
    arrName.push(nameList[i].textContent);
}
// console.log(arrName);

    //* dengan menggunakan map
// const arrName2 =  nameList.map( element => element.textContent );   //* akan error karena bentuknya nodelist bukan array, maka gunakan spread operator
const arrName2 = [...nameList].map( element => element.textContent );
// console.log(arrName2);

    //* coba menggunakan for..of
const arrName3 = [];
for ( const elementTextContent of nameList) {
    arrName3.push(elementTextContent.textContent);
}
// console.log(arrName3);

//* contoh kasus 2
    /* 
        * hover menggunakan cursor, lalu akan ada animasi per huruf
        * maka, spread string tulisan menjadi single element lalu sisipkan tag <span>
    */
const capturedName = document.querySelector(".hero");
const huruf = [...capturedName.textContent].map( function(h, i){
    if(i == 3){
        h = `&nbsp;`;
    }
    return `<span>${h}</span>`
}).join("");
capturedName.innerHTML = huruf;

console.log(huruf);
