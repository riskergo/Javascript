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
//* elementSebelumnya.after(elementYangInginDitambahkan);
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
        // document.body.style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
        //* atau  bisa dengan versi ini
        //* gunakan backtick dan dolar disertai kurung kurawal
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
newButton.ondblclick = function(){
    document.body.removeAttribute("style");
}

const resetButton = document.createElement("button");
resetButton.textContent = "RESET BG COLOR";
resetButton.onclick = function() {
    document.body.removeAttribute("style");
    document.body.removeAttribute("class");
}
newButton.after(resetButton);

/* 
            //* slider untuk mengubah warna
    //* slider merah
//* coba mengubah warna menggunakan slider
const capturedSMerah = document.querySelector("input[name=SMerah]");  //* karena element html-nya tidak mempunyai class ataupun id
                                                                      //*maka select by attribute dan value, mirip seperti css tapi tanpa petik satu/dua pada value-nya
    //* slider hijau
const capturedSHijau = document.querySelector("input[name=SHijau]");
    //* slider biru
const capturedSBiru = document.querySelector("input[name=SBiru]");

                                //* ganti event-nya menjadi "input" agar realtime, karena "change" harus dilepas saat ditekan agar warna-nya berubah
capturedSMerah.addEventListener("input", function(){
    const red = capturedSMerah.value;  //* .value digunakan untuk menangkap apapun element tag input-nya
                                       //* yaitu : textfield, slider, combobox, radio-buttom, checkbox apapun itu, bisa diambil dengan .value. silahkan cek di console.log
    const green = capturedSHijau.value;
    const blue = capturedSBiru.value;
    document.body.style.backgroundColor = "rgb("+red+", "+ green +", "+ blue +")";

    //* tanpa variabel, untuk peforma
    //* document.body.style.backgroundColor = "rgb("+capturedSMerah.value+", 100, 100)";
});
capturedSHijau.addEventListener("input", function(){
    const red = capturedSMerah.value;
    const green = capturedSHijau.value;
    const blue = capturedSBiru.value;
    document.body.style.backgroundColor = "rgb("+red+", "+ green +", "+ blue +")";
})

capturedSBiru.addEventListener("input", function(){
    const red = capturedSMerah.value;
    const green = capturedSHijau.value;
    const blue = capturedSBiru.value;
    document.body.style.backgroundColor = "rgb("+red+", "+ green +", "+ blue +")";
}) */


//* cara yang lebih efektif, memakai for loop atau forEach

    //* versi for loop biasa
/* const range1 = document.querySelectorAll("input[type=range]");
for(let i = 0; i < range1.length; i++){
    range1[i].addEventListener("input", function(){
        const red = range1[0].value;
        const green = range1[1].value;
        const blue = range1[2].value;

        document.body.style.backgroundColor = "rgb("+ red +", "+green+", "+ blue +")"
    })
} */

    //* versi forEach
const range = document.querySelectorAll("input[type=range]");
range.forEach(function(input){
    input.addEventListener("input", function(){
        const RGBColor = "rgb(" +range[0].value+ ", " +range[1].value+ ", " +range[2].value+ ")";
        document.body.style.backgroundColor = RGBColor;
        console.log(range);
    })
})