
let angka1 = [3,34,15,7,2,5,2,134];

////* filter
// bisa mengembalikan banyak array
// maka, bisa menggunakan method join

let angkaFilter = angka1.filter(function(e){
    return e > 5;
})
console.log(angkaFilter);
console.log(angkaFilter.join(" - "));

////* find
// hanya bisa mengembalikan 1 nilai saja, dan bukan berbentuk array
let angka2 = [10,3,6,2,31,6,3,7,8,2];
let angkaFind = angka2.find(function(e){
    return e > 10;
})
console.log(angkaFind);  // tidak error
// console.log(angka3.join(", "));  // error
