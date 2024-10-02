
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


//* versi high order function
// let lebihDari3 = numbers.filter((value) => {
//     return value >= 3;
// }).sort(function(a,b){
//     return a - b;
// });

// console.log(lebihDari3.join(", "))

//* dengan arrow function
const lebihDari3 = numbers.filter((value) => value >= 3).sort( (a,b) => a-b );
//* tidak perlu kurung kurawal dan return
console.log(lebihDari3);
