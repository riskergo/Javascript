//* kasus 1
//* ubah background color menggunakan tombol

//* const capturedBody = document.getElementsByTagName("body")[0]; tidak perlu karena:
//* ada document.body.
const capturedButton = document.getElementsByClassName("warna")[0];

//* cara yg di bawah ini tidak efisien, maka gunakan manipulasi class
// capturedButton.addEventListener("dblclick", function() {
//     document.body.style.backgroundColor = "white";
// })


capturedButton.addEventListener("click", function() {
    // document.body.style.backgroundColor = "lightblue";      //* tidak bisa click 2 kali
    //* sebelumnya, tambahkan class pembantu di css, sebagai background-nya
    //* lalu gunakan methode ini, yaitu class-list method toggle
    document.body.classList.toggle("biru-muda");
    //* kenapa memakai toggle? karena toggle menghilangkan sebuah class jika ada dan-
    // * apabila tidak ada maka ditambahkan, silahkan cek console
    //* di sini cocok sekali apabila untuk mengembalikan warna semula background jika button ditekan 2x
    
    //* coba dengan setAttribute
    // document.body.setAttribute("class", "biru-muda");
    //* tidak bisa kembali ke warna semula jika di-klik 2x
})


//* kasus 2
//* tambah tombol baru menggunakan javascript
//* ketika di-klik, maka akan menghasilkan warna random

        //* buat tombol
const newButton = document.createElement("button");
newButton.setAttribute("type", "button")
const textForNewButton = document.createTextNode("RANDOM COLOR!");
newButton.appendChild(textForNewButton);     //* append ke button

// const capturedScript = document.getElementsByTagName("script")[0];
// document.body.insertBefore(newButton, capturedScript);
//* pakai cara yg baru ini, after/before
capturedButton.after(newButton);

        //* buat logika untuk warna acak-nya
    //* menggunakan event handler
newButton.onclick = function(){
    
    //* di sini kita menggunakan rgb karena rgb itu inputannya angka dari 0 - 255
    //* buat dulu angka random antara 0 - 255
    const red = Math.round(Math.random() * 255);    //* range daari 0 - 255, kalau ingin dari 1 - 255, maka tambahkan 1 setelah 255
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
            //* note: Math.round membulatkan ke angka terdekat
            //* Math.floor membulatkan ke angka kebawah
            //* Math.ceil membulatkan ke angka  keatas
    document.body.style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
}