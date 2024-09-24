// * konsep this pada arrow function

// * constructor function
// const Mahasiswa = function(){
//     this.nama = "gege";
//     this.umur = 10;

    // console.log(this);

//     this.sayHello = function(){
//         console.log(`halo nama gumha ${this.nama} dan saya berumur ${this.umur} tahun`);
//     }
// };
// //* instansiasi object

// const gege = new Mahasiswa();


// * konversi ke arrow function, untuk melihat konteks keyword this-nya
// * tidak semua function bisa diubah menjadi arrow function
// const Mahasiswa = function() {
//     this.nama = "korea";
//     this.umur = 13;

//     //* tetapi untuk method bisa diubah menjadi arrow function
//     this.sayHello = () => {
//         console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);
//     }
//     //* sebenarnya arrow function tidak menyimpan konsep this, maka function tersebut akan mencari ke luar
// };

// const korea = new Mahasiswa();

// * arrow function terlihat sama seperti function declaration / expression


// * tapi akan berbeda jika kita membuat object dengan menggunakan object literal


// const mhs1 = {
//     nama: "bampukiers",
//     umur: 13,
    // sayHello: function() {
    //     console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);  //* ini tidak undefined
    //     //* karena akan mencari ke lexical scope-nya atau mencari ke luar scope method ini
    // }
    // sayHello: ()=> {
    //     console.log(`Woy nama gumha ${this.nama} dan gumha berumur ${this.umur}`);  //* undefined karena arrow function tidak memiliki konsep this
    // }

//     //* jika ingin menggunakan arrow function, gunakan tanpa keyword this tetapi gunakan nama objectnya
//     sayHello: () => {
        // console.log(`Woy nama gumha ${mhs1.nama} dan gumha berumur ${mhs1.umur}`); 
//         console.log(this);      //* ini mencari ke object window karena tidak ada di dalam object mhs1
//     }
// }


//* contoh kasus lain
// const Mahasiswa = function() {
//     this.nama = "okare";
//     this.umur = 12;
//     this.sayHello = function() {
//         console.log(`yo man ${this.nama} im ${this.umur} year old`)
//     }

    //* di sini terdapat perbedaan konsep hoisting pada pembuatan function
    //* dengan menggunakan function expression functionnya disimpan kedalam variabel dan tidak kena hoisting
    //* dengan menggunakan function declaration akan meng-hoisting dan karena hoisting, function declaration akan mengecek variabel value di scope global-nya

    //* contoh:
    // setInterval(function () {       //* menggunakan function declaration yaitu setInterval tapi dengan parameter anonymous function expression biasa bukan arrow function
        // console.log(this.umur++);       //* NaN karena mencari this di scope tidak ada, maka mencari di scope global
    //     //* coba gunakan ini
        // console.log(Mahasiswa.umur) //* undefined 
    // }, 500)

    //* untuk mengatasinya, gunakan arrow function
    // setInterval(() => {          //* karena arrow function tidak punya konsep this, maka akan mencari di lexical scope-nya atau diluarnya satu tingkat, bukan di global
    //     console.log(this.umur++);
    //     console.log(this)        //* pengecekan
    // }, 700);
    

// }
// const satu = new Mahasiswa();



//* kasus real untuk arrow function


const capturedBox = document.querySelector(".box");


//* versi errornya:

// capturedBox.addEventListener("click", () => {       //* menggunakan arrow function
//     console.log(this)       //* hasilnya object windows, karena arrow function tidak memiliki konsep this, maka akan mencari ke scope luarnya
// })

capturedBox.addEventListener("click", function(){
    // console.log(this);


    //* sedikit debugging, karena saat di-klik kedua kalinya, transisinya terbalik

    let satu = "size";
    let dua = "caption";

    //* versi ribet
    // if(this.classList.contains(satu)){
    //     this.classList.toggle(dua);
    //     setTimeout(() => {
    //         this.classList.toggle(satu);   //* toggle lagi
    //         }, 700);
    // }else {
    //     this.classList.toggle(satu)       //* gunakan toggle, jangan add. Karena konsep yang dibawa oleh toggle adalah: jika ada: hapus, jika tidak ada: tambahkan
    //     setTimeout(() => {
    //         this.classList.toggle(dua);   //* toggle lagi
    //     }, 700);
    // }

    // //* versi mudah :
    if(this.classList.contains(satu)){
        //* biasanya membutuhkan variabel temporary
        // let temp = satu;
        // satu = dua;
        // dua = temp;
        //* dengan javascript terbaru, bisa mempersingkatnya dengan menggunakan ini
        [satu, dua] = [dua, satu];
    };

    this.classList.toggle(satu);

    setTimeout(()=> {
        this.classList.toggle(dua);
    }, 650);
    

    








    // //* coba menggunakan anonymous function expression
    // setTimeout(function () {
    //     capturedBox.classList.toggle("caption");   //* tapi tidak menggunakan keyword this, tetapi nama object yang ditangkap
    //     //* ternyata bisa, karena bukan instansiasi dari sebuah object create dari constructor function (prototype) / class
    // }, 650);

    //* cara lama
    // let that = this;
    // //* diakali dengan membuat variabel yang berisi this
    // setTimeout(function () {
    //     that.classList.toggle("caption");   //* tapi tidak menggunakan keyword this, tetapi nama object yang ditangkap
    //     //* ternyata bisa, karena bukan instansiasi dari sebuah object create dari constructor function (prototype) / class
    // }, 700);
});



