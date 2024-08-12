
// splice
// rumus:
////* namaArray.splice(startIndex,yangDihapus,element1yangDitambahkan, element2yangDitambahkan) */
// namaMHS.splice(2,0,"Bampuki", "Kintana");    
// console.log(namaMHS.join(", ")); // Koree, Rusdi, Bampuki, Kintana, Kanye, Kendrick

// splice with delete count
// namaMHS.splice(0, 2, "Mamola");
// console.log(namaMHS.join(", "));     // Mamola, Kanye, Kendrick


// slice
// rumus:
///* namaArray.slice(awal,akhir)  */
// yang akhir tidak terbawa
// ditampung di array yang lain
let namaMHS = ["Koree", "Rusdi", "Kanye", "Kendrick"];
let namaMHSDO = namaMHS.slice(0,1);
console.log(namaMHS.join(", "));        // tetap
console.log(namaMHSDO.join(", "));      // Koree
