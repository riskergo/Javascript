
const container = document.querySelector(".container");
const hugeImage = container.querySelector(".huge");

//* variabel penampung yang dinamis
let temporaryContainerClass = undefined;
console.log("0. isi temporary class saat event function belum di-klik :  " + temporaryContainerClass);
//* 

container.addEventListener("click", function (event) {
    if (event.target.className == "thumb") {


        hugeImage.src = event.target.src;
        
        hugeImage.classList.add("fade");                
        
        setTimeout(function(){
            hugeImage.classList.remove("fade");
        }, 500);
        
        console.log("1. isi temporary class setelah addEventListener dijalankan (tahap pertama): "+temporaryContainerClass);
        if (temporaryContainerClass != undefined){
            temporaryContainerClass.classList.remove("clicked-img");       //* remove class clicked-img
        }

        console.log(temporaryContainerClass);   //* bila sudah 2x di-klik, hasilnya .thumb saja karena sudah di remove yang sebelumnya, lalu...

        event.target.classList.add("clicked-img");      //* tambahkan class clicked-img
        
        temporaryContainerClass = event.target;         //* assign temporary class dengan event.target yaitu element mengandung property dan value
        console.log(temporaryContainerClass);
        
        console.log("2. isi temporary class setelah dilakukan assignment (tahap kedua): " + temporaryContainerClass.classList);
    };
});
