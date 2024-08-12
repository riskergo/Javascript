
////* sort 

let angka1 = [7,6,2,8,9,4,1,5];
console.log(" variabel angka1 Sebelum sort : " + angka1.join(", "));
angka1.sort()
console.log(" variabel angka1 Sesudah sort : " + angka1.join(", "));

// sort bila angkanya ada 2 digit
let angka2 = [5,21,6,2,3,51,2,62,1]
// harus menambahkan function di method array sort-nya
console.log(" variabel angka2 Sebelum sort : " + angka2.join(", "));
angka2.sort(function(a, b){
    return a-b;
})
console.log(" variabel angka2 Sesudah sort : " + angka2.join(", "));

// sort bila ada beberapa digit
let angka99 = [3141,64,8686,123,464,452,48,45,5741,35];
console.log(" variabel angka99 Sebelum sort : \n" + angka99.join(", "));
angka99.sort(function(a, b){
    return a-b;
})
console.log(" variabel angka99 Sesudah sort : \n" + angka99.join(", "));