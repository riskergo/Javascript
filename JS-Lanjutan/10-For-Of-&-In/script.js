
        //* for..of
/* 
    * iterable objects
* yang bisa di-looping oleh for..of
        * string
        * array
        * arguments
        * typed Array
        * collection such as map, set dll
*/

//* array:
// const mhs = ['koree', 'rusdi', 'fuad'];
    //* menggunakan for biasa
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }
    //* menggunakan forEach
// mhs.forEach(element => console.log(element));

    //* karena array merupakan salah satu dari iterable objects, maka
// for (const element of mhs) {
//     console.log(element);
// }

//* string
    //* forEach tidak bisa digunakan bersama string
const nama = "Koree Antonio";
// for ( let i = 0; i < nama.length; i++){
//     console.log(nama[i]);
// }       //* tetapi bisa di-iterasi menggunakan for biasa, dan
// for( const char of nama){
//     console.log(char);
// }       //* bisa di-iterasi menggunakan for..of 

//* masih Array
const mhs = ['koree', 'rusdi', 'fuad'];
//* menggunakan forEach
// mhs.forEach( (element, index)  => console.log(`${element} adalah mahasiswa ke-${index+1}`))
/* 
 * jikalau menggunakan for..of, secara default tidak memiliki index
 * cara mengakalinya, gunakan method object.etnries() pada array
*/
// for( const elementMhs of mhs.entries()){    //* method .entries() akan mengembalikan array berupa :
        // * [index, element];
//     console.log(elementMhs);        
// }
//* maka gunakan destructuring array terhadap variabel representasi di dalam for of tsb
// for (const [indexMhs, elementMhs] of mhs.entries() ){
//     console.log(`${elementMhs} adalah mahasiswa ke-${indexMhs+1}`)
// }


//* Nodelist
//* query pada DOM
const nameList = document.querySelectorAll(".nama")
// console.log(nameList);
    //* forEach bisa digunakan pada browser terbaru, tapi tidak dengan browser lama
//* coba
// nameList.forEach(element => console.log(element.innerText));
    //* menggunakan for biasa
// for (let i = 0; i < nameList.length; i++){
//     console.log(Array.from(nameList)[i].innerText)
// }

    //* menggunakan for..of
// for ( const node of nameList ){
//     console.log(node.innerText);
// }


//* arguments
function menjumlahkanAngka(){
    // console.log(arguments);
/* 
    * bila tidak menambahkan parameter, maka secara default argument yang dilemparkan disimpan di dalam 
    * variabel berbentuk array bernama arguments
    * karena arguments berbeda jenisnya dari array (walaupun mirip)
    * maka tidak bisa menggunakan method forEach, map dan method lainnya
 */
//* menggunakan for..of
    let jumlah = 0;
    for (const angka of arguments){
        // jumlah += angka;
        jumlah = jumlah + angka;
    }
    return jumlah;
}
// console.log(menjumlahkanAngka(1,2,5,7,2));


        //* for..in
/* 
    * creates a loop only iterating over enumerable, di sini konteksnya adalah properti pada object
*/

const objMhs = {
    nama: "Xontole",
    email: "gugugagaIrony@kokoant.com",
    role: "Xontoli"
}
    //* mencetak key dari object
for ( const keyObj in objMhs ) {
    console.log(keyObj);
}
    //* mencetak value dari object
for ( const keyObj in objMhs ) {
    console.log(objMhs[keyObj]);
}
    //* mencetak keduanya
for ( const keyObj in objMhs ) {
    console.log(`key: ${keyObj}, and its value: ${objMhs[keyObj]}`);
}   




//* coba for..in pada array. Tidak ideal karena peformanya jadi lebih lambat, jadi gunakan for of bersama destructuring variabel untuk index dan elementnya 
const arr2 = ["kor", "ask", "kdo"];
// for (const index in arr2){
//     console.log(index);
//     console.log(arr2[index]);
// }
//* for..of
// for (const [index, element] of arr2.entries() ){
//     console.log(index)
//     console.log(element);
// }



    /* 
    
        *   kesimpulan :
        *   for..of diperuntukkan untuk iterable object, seperti array, nodelist, arguments, strings, typed array dan collection (set, map);
        *   for..in diperuntukkan untuk enumerable, yaitu properti di dalam sebuah object
    
    
    */