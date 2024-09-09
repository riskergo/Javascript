

//* IIFE (Immediately Invoked Function Expression) / SIAF (Self Invoking Anonymous Function)

//* IIFE / SIAF versi function expression
let x = (function(){
    console.log("core");
})();

//* IIFE / SIAF tanpa disimpan ke dalam variabel
(function(){
    console.log("CORE1");
})();



//* coba ubah value dari sebuah property di dalam object
const obj1 = {
    nama: "Core",
    umur: 31
}

console.log(obj1);

obj1.umur = 34;
obj1.nama = "Core Antonio"
console.log(obj1);  


//* coba merubah array yang di-assign menggunakan const
const ar1 = [3,5,7,1,3];
console.log(ar1);

ar1.push(8);
console.log(ar1);