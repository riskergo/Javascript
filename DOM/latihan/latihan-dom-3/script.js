
    // * versi event Delegation
const container = document.querySelector(".container");
const hugeImage = container.querySelector(".huge");
// const thumbs = container.querySelectorAll(".thumb");

//* variabel penampung yang dinamis
let temporaryContainerClass = [];
console.log("isi temporary class (awal) :  " + temporaryContainerClass);
//* 
let theResultFromTemporaryClassArray = undefined;

console.log(temporaryContainerClass.length)

container.addEventListener("click", function (event) {
    if (event.target.className == "thumb") {

        //* coba tanpa pengecekan for
        console.log("isi temporary class setelah addEventListener dijalankan: "+temporaryContainerClass);
        if (temporaryContainerClass.length == 1){
            // temporaryContainerClass.pop();       //* isi array
            // theResultFromTemporaryClassArray.classList.remove("clicked-img");
            // console.log("isi temporary class sebelumnya dihapus: " + temporaryContainerClass );
        }

        console.log(theResultFromTemporaryClassArray);
        //* cara yang lebih efektif, hanya meng-assign property src ke target src
        hugeImage.src = event.target.src;
        //* tambahkan class, sesuai yg di css
        hugeImage.classList.add("fade");
            //* agar class fade pada element hugeImage hilang setelah sepersekian detik, tambahkan setTimeOut dengan parameter anonymous function yang menghapus class fade lagi
            //* ini diterapkan karena kasus, apabila image lain yang di-klik, class fade-nya tetap ada, jadi tidak ada animasi lagi ketika..
            //* image yang lain di-klik
        
        //* jalankan fungsi ini ketika 0.5s berakhir
        //* gunakan setTimeOut agar berhasil
        //* cek di console bagian element
        setTimeout(function(){
            hugeImage.classList.remove("fade");
        }, 500);
        
        // thumbs.forEach(function(elementThumb){
            // if(elementThumb.className == "thumb clicked-img"){
            //     elementThumb.classList.remove("clicked-img");
            // }
        //     //* tanpa percabangan
        //     //* assign class elementThumb menjadi thumb saja
        //     elementThumb.className = "thumb";
        // });

        // event.target.classList.add("clicked-img")

        theResultFromTemporaryClassArray = temporaryContainerClass[0];

        event.target.classList.add("clicked-img");      //* tambahkan class clicked-img
        temporaryContainerClass.unshift(event.target);         //* assign temporary class dengan event.target yaitu element
        console.log("isi temporary class setelah dilakukan assignment: " + temporaryContainerClass);
        console.log(temporaryContainerClass.length)
    };
});


// * versi loop, menggunakan forEach/for loop
// * kurang efektif

// const thumbs = document.querySelectorAll(".thumb");
// const hugeImage = document.querySelector(".huge")

    //* for biasa
// for(let i = 0; i < thumbs.length; i++){
//     thumbs[i].addEventListener("click", function(event){        //* letak event-nya ke parameter fungsi agar menjadi event object
//         hugeImage.src = event.target.src 
//     })
// }
    //* versi forEach
// thumbs.forEach(function(element){
//     element.onclick = function(){   
//         hugeImage.setAttribute('src', element.getAttribute('src'));     //* parameter ke-2 adalah sebuah fungsi yang menangkap value dari atribut src
//     };
// });


// const testButton = document.getElementsByTagName("button")[0];
// console.log(testButton.type);   //* script properties, cek di w3school
