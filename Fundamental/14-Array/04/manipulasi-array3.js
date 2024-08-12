
///* forEach */
// mirip seperti for, tapi lebih singkat dan powerfull

// versi for
let angka = [1,2,5,43,2,12,];
for(let i = 0; i < angka.length; i++){
    console.log(angka[i]);
}

// versi forEach
// rumus:
/* namaArray.forEach(functionExpression(parameter){ 
    action
}) */
angka.forEach(function(e){
    console.log(e);
})

// forEach dengan index array-nya
// rumus:
/* namaArray.forEach(functionExpression(element, index){ 
    action
}) */
angka.forEach(function(e,i){
    console.log("Index : " + i + " value/element : " + e);
})


////* map  */
// map mirip seperti forEach, tapi bisa mengembalikan array
// kalau forEach tidak
// rumus:
/* 
    namaArray.map(function(parameter1=element,parameter2=index)){
        aksi/function body
        bisa return
    }
*/
angka.map(function(e, i){
    console.log(i + " | " + e);
})
// jika bisa return, maka bisa ditampung ke variabel baru
let angka2 = angka.map(function(e, i){
    return e * 2;
})
console.log(angka.join(", "));
console.log(angka2.join(", "));

