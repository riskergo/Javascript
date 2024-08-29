
const tombolClose = document.querySelectorAll(".close")

//* prevent default
//* menghentikan aksi/behavior bawaan sebuah element html
//* contoh, kita ubah tag span.close menjadi tag a dengan attribut href

tombolClose.forEach(function(element){
    element.addEventListener("click", function(event){
        event.target.parentElement.style.display = "none"
        //* karena attribute href tag a kosong otomatis memuat ulang halaman bila tag a diklik maka semua element akan kembali normal
        //* gunakan method prevent default
        event.preventDefault();     //* panggil object event yang berada di parameter function pada method eventListener;
    })
})

