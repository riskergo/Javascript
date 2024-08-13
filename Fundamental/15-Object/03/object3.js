// console.log(this);  // this adalah object global == window
// console.log(window);    // sama
// console.log(this === window);       // true

// dengan menggunakan var
// var obj = 10;
// console.log(this.obj);  // 10
// console.log(window.obj);  // 10

// dengan menggunakan let
// let obj1 = 13;
// console.log(this.obj1);     // undefined karena let
// console.log(window.obj1);   // juga undefined karena keyword let

// dengan menggunakan const
// const obj2 = 10;
// console.log(this.obj2);     // undefined karena const   
// console.log(window.obj2);   // undefined juga kerna keyword const





// membuat object

//* function declaration
// function halo(){
//     console.log(this);
//     console.log("halo1");
// }
// panggil
// halo(); 
// this.halo();
// this mengembalikan object global    
// window.halo();  // sama




//* object literal
// let obj1 = {nama: "KOre", umur: 14};
// obj1.halo = function(){
//     console.log(this);
//     console.log("halo2");
// }
// panggil
// obj1.halo();
// this, di sini konteksnya mengembalikan object itu sendiri/object yang bersangkutan



// constructor
function Halo(){
    console.log(this);
    console.log("halo3");
}
// panggil
// jikalau tanpa new
// Halo()   jadi object global
// tapi, bila memakai keyword new, maka
new Halo();
// mengembalikan object, object yang mana? object yang baru dibuat
// contoh :
let objC1 = new Halo();     // maka this adalah objC1
let objC2 = new Halo();     // maka this adalah objC2
// perbedaannya adalah scope this-nya, 