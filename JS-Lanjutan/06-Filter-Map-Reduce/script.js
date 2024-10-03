
//* filter, map and reduce
//* adalah contoh dari high order functionz

const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
//* cari angka yang >= 3

//* versi for biasa
let lebihDari3v2 = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 3){
        lebihDari3v2.push(numbers[i]);
    }
}
// lebihDari3v2.sort(function(a, b){return a - b});
// console.log(lebihDari3v2.join(", "));

    //* filter
//* versi high order function
// let lebihDari3 = numbers.filter((value) => {
//     return value >= 3;
// }).sort(function(a,b){
//     return a - b;
// });

// console.log(lebihDari3.join(", "))

//* dengan arrow function
// const lebihDari3 = numbers.filter(value => value >= 3).sort( (a,b) => a-b );
//* tidak perlu kurung kurawal dan return
// console.log(lebihDari3.join(", "));


    //* map
//* mengalikan semua elemen dengan angka 2
//* dan coba urutkan 
const angkaX2 = numbers.map(a => a * 2).sort((a,b) => a - b);
console.log(angkaX2.join(", "));

//* ingat pada parameter callback function map, filter ataupun forEach yang pertama merepresentasikan sebuah nilai/element dari array tsb
//* yang kedua merepresentasikan sebuah index dari array tsb
// const angkaX2 = numbers.map((element, index) => {   
//     console.log(`index ke-${index} nilainya ${element}`);
// });

// const filteredNumbers = numbers.map( (a) => {        //* lebih efektif menggunakan filter jika ingin memfilter isi/element/value dari array tsb
//     if(a >= 3){
//         return a;
//     }
//  }); 
//  console.log(filteredNumbers.length);
//  console.log(filteredNumbers.join(", "));


    //* reduce
    //* parameter dalam method reduce ada 2, 1 disebut accumulator dan 2 disebut currentValue
    //* dan sebenarnya ada nilai awalnya, yang secara default di-set 0
//* const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9] 
const totalInArrayNumbers = numbers.reduce( function(accumulator, currentValue){
    // console.log(accumulator)
    // console.log(currentValue)
    // return accumulator + currentValue, 5}
}); //* salah, harusnya letak ,5 setelah block kurung kurawal

const totalInArrayNumbers2 = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 5 )
console.log(totalInArrayNumbers);
console.log(totalInArrayNumbers2);

