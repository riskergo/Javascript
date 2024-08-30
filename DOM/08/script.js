

//* masih belum efektif
// const tombolClose = document.querySelectorAll(".close")
// tombolClose.forEach(function(element){
//     element.addEventListener("click", function(event){
//         event.target.parentElement.style.display = "none";
//         event.preventDefault();     
//         //* agar menghentikan sebuah event yang berada di atas bagian ini
//         //* atau disebut event Bubbling / perambatan ke atas
//         //* maka gunakan method ini:
//         event.stopPropagation();        //* memberhentikan event yang diterapkan di atas / bagian parent-nya tombol close ini
//         //* yang mana adalah div.card
//     });
// });


//* masih belum efektif juga
// //* coba tambahkan event pada masing-masing card
// const cards = document.querySelectorAll(".card");
// cards.forEach(function(eachOfCard){
//     //* tanpa eventListener
//     eachOfCard.onclick = function(event){
//         alert("okey " + eachOfCard.querySelector(".nama").textContent);
//     };

//     //* bila di-klik tombol close, fungsi ini akan dijalankan juga
//     //* ini disebut event bubbling atau perambatan ke atas
//     //* maka harus ditambahkan method di bagian tombol close
// })


//* kenapa belum efektif? karena apabila kita menambahkan element baru, contohnya div.card baru melalui html bukan file source code scr langsung
//* maka element yang baru ditambahkan tersebut tidak terpengaruhi/tertanam event
//* maka gunakan algoritma seperti ini

    //* tangkap containernya
const container = document.querySelector(".container")      //* disarankan menggunakan querySelector
    //* tambahkan event pada container-nya
    //* bisa menggunakan add eventListener atau bisa juga seperti ini
container.onclick = function(onclickEvent){
    // console.log(onclickEvent);          //* pengecekan, ini akan menghasilkan object event
    // console.log(onclickEvent.target);   //* manfaatkan properti .target dari event object
        //* jadi gunakan .target untuk mencari element yang di klik secara spesifik
        //* dan masukkan ke dalam percabangan if
    if(onclickEvent.target.className == "close"){       //* akan mengecek apabila ada target yang di-klik mempunyai class close 
            //* lalu manfaatkan parent element target tersebut, 
            //* di sini parentElement yang di-target adalah div.card
            //* maka, gunakan property parentElement
        onclickEvent.target.parentElement.style.display = "none";
        //* parentElement dari target = div.card, akan di-set display-nya menjadi none

        //* bila ditambahkan div.card baru melalui browser, event-nya tetap akan memengaruhi div.card yang baru tersebut
        //* karena event-nya ditetapkan melalui parentElement / di sini kasusnya adalah pembungkus dari div.card tsb 
    }
}