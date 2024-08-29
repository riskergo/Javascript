    //* menghapus card

    // const tombolClose = document.querySelector(".close");       //* querySelector hanya mengambil element pertama yang ditemuinya, sisanya tidak walaupun sama
    // const divCard = document.querySelector(".card");    
    
    // tombolClose.onclick = function(){
    //     // divCard.remove();    //* menghilangkan secara keseluruhan, termasuk baris-baris code-nya
    //     divCard.style.display = "none";
    // }


    //* dom traversal
    const tombolClose = document.querySelectorAll(".close")     //* gunakan querySelector all agar berbentuk nodelist
    // const card = document.querySelectorAll(".card") //* cara yang salah karena tidak menggunakan dom traversal

    //* looping, bisa menggunakan for biasa atau forEach
    // for (let i = 0; i < tombolClose.length; i++){
    //     tombolClose[i].addEventListener("click", function(e){        //* tambahkan parameter pada anonympus function, parameter itu akan berubah menjadi object


    //         // card[i].style.display = "none";     //* cara yang salah 
    //         //* cara yang tidak benar
    //         //* 1. lihat di bagian html, bagian element yang ditangkap ini
    //         //* 2. lalu gunakan parent-nya
    //         // tombolClose[i].parentElement.style.display = "none";     //* masih kurang efektif
    //         //* elementYangDitangkap[indexElement].telusuriParent-nya.....
    //         //* cara yang benar tapi tidak efektif  
    //         // e.target.parentElement.style.display = "none";  //* target adalah bagian dari event, silahkan cek console.log(event) lalu cari value dari target
    //         console.log(e.target);
    //     })
    // }

    //* versi forEach
tombolClose.forEach(function(element){
    element.addEventListener("click", function(event){
        event.target.parentElement.style.display = "none"
    })
})


//* ragam method dom traversal
/* 
    //* parentNode = node
    //* parentElement = element
    //* nextSibling = node
    //* nextElementSibling = element
    //* previousSibling = node
    //* previousElementSibling = element
*/

//* contoh:
const firstCardName = document.querySelector(".nama");
//* 2 ini ada perbedaan cek method-nya
console.log(firstCardName.parentNode);         //* div.card
console.log(firstCardName.parentElement);       //* div.card

//* cara mengambil grandparent
console.log(firstCardName.parentElement.parentElement);     //* div.container, capturedElement.capturedElement'sParent.grandParent atau capturedElement.parent1Tingkat.parent1TingkatnyaLagi

//* cari element/node yang parent-nya sama
console.log(firstCardName.nextSibling)  //* expect: .telp tapi hasilnya ENTER karena yang dihasilkan oleh javascript DOM adalah node, maka yang diambil adalah ENTER, cek di html
//* kecuali jika enternya dihapus, maka hasilnya baru element selanjutnya yang parent-nya sama
//* jadi, gunakan ini
console.log(firstCardName.nextElementSibling);  //* .telp
//* begitu pula dengan previous, perilaku/behaviour-nya sama seperti next
console.log(firstCardName.previousSibling)  //* enter/text
console.log(firstCardName.previousElementSibling)  //* enter/text   

//* coba previous 2 kali dari element span class name
console.log(firstCardName.previousElementSibling.previousElementSibling);   //* null karena setelah tag span.nama adalah img lalu setelah img tidak ada tag/element maka hasilnya null
//* kecuali next 2 kali, hasilnya:
console.log(firstCardName.nextElementSibling.nextElementSibling)    //* element/tag span.close, karena ada
