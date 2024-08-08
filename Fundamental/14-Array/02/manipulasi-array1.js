
// method di sini adalah sebuah function yang terdapat di dalam object

// method 1
// join
let nama = ['koree', 'broski', 'omar', 'axor'];
console.log(nama.join(", "));



// method 2
// length
let umr = [3100000, 2500000, 2700000];
// biasanya digunakan di sebuah loop
for(let i = 0; i <umr.length; i++){
    console.log(umr[i]);
}

// method 3 - 7
// push, pop, unshift, shift

// push
let merkHP = ["Xiaomi", "Vivo", "Iphone", "Realme"] ;
merkHP.push("Asus");
console.log(merkHP.join(", "));
// push akan menambahkan element array di akhir index arraynya
// push tidak hanya dibatasi dengan 1 element saja, bisa beberapa
merkHP.push("OPPO", "Sony", "Infinix");
console.log(merkHP.join(", "));

// pop
let merkLaptop = ["Asus", "MSI", "Lenovo", "HP"];
console.log("sebelum method pop : "+merkLaptop.join(", "));
merkLaptop.pop();
console.log("sesudah method pop : "+ merkLaptop.join(", "));
// pop meghapus element array yang terdapat di index terakhir array
// sepertinya bisa dikombinasikan dengan loop
// tes
let hapus = ['asd', 'as4d', 'as13fdk', 'asdia'];
console.log(hapus.join(", "));
for(let i = hapus.length; i >= 1; i--){
    hapus.pop();
}
console.log("array setelah di-pop : " +hapus.join(", "));
console.log(hapus.length);

// unshift
let merkMotor = ["Yamaha", "Honda"];
console.log("Sebelum method unshift : " + merkMotor.join(", "));
merkMotor.unshift("Suzuki");
console.log("Sesudah method unshift : " + merkMotor.join(", "));
// mirip seperti push, tapi unshift akan menambahkan element array dari bagian depan/awal array tsb


// shift
let merkMobil = ["Esemka","Toyota", "Mitsubishi", "Daihatsu", "Honda"];
console.log("Sebelum method shift : " + merkMobil.join(", "));
merkMobil.shift();
console.log("Sesudah method shift : " + merkMobil.join(", "));
// mirip seperti pop, tapi shift akan menghapus element array dari bagian awal/depan array tsb

// tes dengan loop
let hapus2 = ["ajsotr", "asorj", "askpr", "ASE2"];
console.log(hapus2.join(", "));
for(let i = hapus2.length; i >= 1; i--){
    hapus2.shift();
}
console.log("array setelah di-shift : "+hapus2.join(", "));
console.log(hapus2.length);