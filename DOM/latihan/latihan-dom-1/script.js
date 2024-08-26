//* kasus 1
//* ubah background color menggunakan tombol

//* const capturedBody = document.getElementsByTagName("body")[0]; tidak perlu karena:
//* ada document.body.
const capturedButton = document.getElementsByClassName("warna")[0];

//* cara yg di bawah ini tidak efisien, maka gunakan manipulasi class untuk menggunakan toggle
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
            //* kasus 3 slider untuk mengubah warna
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
const capturedInput = document.querySelectorAll("input[type=range]");
/* capturedInput.forEach(function(input){
    input.addEventListener("input", function(){
        const RGBColor = "rgb(" +capturedInput[0].value+ ", " +capturedInput[1].value+ ", " +capturedInput[2].value+ ")";
        document.body.style.backgroundColor = RGBColor;
        console.log(capturedInput);
    })
}) */

    //* versi forEach tapi dengan arrow function
capturedInput.forEach(elementInput => {    //* gunakan arrowfunction dengan parameter yang berupa element, karena di dalam method forEach, parameter pertama adalah element yamg kedua adalah index(key)
    elementInput.addEventListener("input", () => {  //* pada masing2 element input, tambahkan event method yaitu addEventListener dengan event input agar realtime
        //* buat variabel untuk menampung value dari masing2 element tsb, 
        //* ambil value-nya dari element input yang sudah di-capture, bukan yang dari parameter-nya
        // const color = "rgb("+ capturedInput[0].value +", "+capturedInput[1].value+", "+capturedInput[2].value+")"
        //* jgn lupa tambahkan index, karena element yang di-capture berupa node-list

        // document.body.style.backgroundColor = color;    //* assign ke dalam style.backgroundColor variabel tersebut
        // console.log(capturedInput);     //* pengecekan

        //*coba tanpa pembuatan variabel
        document.body.style.backgroundColor = "rgb("+ capturedInput[0].value +", "+capturedInput[1].value+", "+capturedInput[2].value+")"   
        //* lebih ringkas dan meningkatkan performa karena tanpa membuat variabel, tapi tidak mudah dibaca
    })
})


        //* kasus 4, bila mouse digerakkan, maka warna-nya berubah

//* karena mouse yang digerakkan di dalam body, langsung saja terapkan ke body (tidak perlu di-capture);
                            //* gunakan event mousemove
document.body.addEventListener("mousemove", function(mouseEvent){
    //* cari sumbu x (horizontal) dan sumbu y (vertikal)
        //* gimana cara mencari sumbu2 tsb?
        //* gunakan method yg bernama clientX untuk horizontal, clientY untuk vertikal
        //* tapi masalahnya, method tersebut harus menempel ke sebuah object, maka
        //* tambahkan paramater ke sebuah function, supaya berperilaku seperti object
        //* nama event itu terkait dengan event-nya
    //* pengecekan
        // console.log(mouseEvent.clientX);
        // console.log(mouseEvent.clientY);
    //* lalu tangkap ukuran browser, browser berada di object window, bukan document
    //* document yaitu bagian pada website, kalau window maka seluruh bagian browser
    //* pengecekan
        // console.log(window.innerWidth); //* disini window.innerWidth berfungsi untuk mengetahui lebar kotak putih di dalam website
        // console.log(window.innerHeight) //* kalau ini untuk mengetahui tinggi dari kotak putihnya    (docoument-nya)
        //* karena document dikelola oleh window, maka tulis window (1 tingkat lebih tinggi dari document, liat DOM Tree);

    //* untuk mendapatkan angka antara 0 ~ 255 setiap mouse digerakkan, maka:
    const xPOS = Math.round((mouseEvent.clientX / window.innerWidth) * 255)  //* contoh, jika cursor berada di paling kiri document, maka akan menampilkan angka yang kecil, jika semakin ke bagian kanan maka akan menampilkan angka yang besar tapi tidak lebih dari 255
    const yPOS = Math.round((mouseEvent.clientY / window.innerHeight) * 255)    //* jika cursor berada di paling atas document, akan menampilkan angka yang kecil dan apabila cursor semakin ke bawah maka akan menampilkan angka yang besar tapi tidak lebih dari 255
        // console.log(xPOS);  //* pengecekan
        // console.log(yPOS)   //* pengecekan
        //* karena hasilnya berkoma, maka gunakan method pembulatan
        //* dan untuk nilai yang satu lagi yaitu (blue) karena red dan green sudah ada value-nya di atas, maka gunakan saja method math random untuk generate angka random dari 0 ~ 255
    // const randomNumberForGreenValue = Math.round((Math.random() * 255))
    // console.log(randomNumberForGreenValue); //* pengecekan
        //* karena berkoma, jangan lupa gunakan method pembulatan
    //* peng-assign-an
    // document.body.style.backgroundColor = "rgb("+xPOS+","+yPOS+", "+randomNumberForGreenValue+")";  //* assign menggunakan concatenation
    //* setelah diuji langsung, sepertinya lebih baik menetapkan value green dengan nilai yang tetap, yaitu 100
    document.body.style.backgroundColor = "rgb("+xPOS+","+yPOS+", 100)";

    //* setelah diuji juga, terdapat sedikit bug, yaitu: cursor hanya berubah di bagian yang terdapat element html-nya (body yang mempunyai element htmlnya atau CONTENT-nya)'
    //* maka akalin dengan mengatur css-nya
});

    /* 
        ? RECAP
        * untuk menangkap body, tidak perlu membuat variabel baru karena langsung bisa diakses dengan cara document.body
        * ada beberapa event momen, yaitu
        *   - click
        *   - dblclick
        *   - change
        *   - input
        *   - mousemove
        * gunakan manipulasi class yaitu classList.toggle() agar sebuah tombol apabila diklik 2x, maka akan kembali seperti semula
        * untuk menambahkan element yang baru dibuat, bisa menggunakan method append(), appendChild(), after(elementYangAkanBeradaDiUrutanSebelumnya), before(elementYangAkanBeradaDiUrutanSetelahnya)
        * .value yang ditempelkan element input, akan mendapatkan value-nya, lalu tampung ke dalam variabel
        * untuk mempersingkat kode, bisa menggunakan for loop / forEach apabila attribute/element yang ingin dimanipulasi sama
        *   -cth : pada slider, terdapat pemborosan baris kode, yaitu berulang kali membuat function maka gunakan forEach karena attribute input-nya sama yaitu range, tapi tangkap dulu input=range ke dalam variabel yaitu menggunakan document.querySelectorAll("input[type=range]"), bisa menggunakan versi seperti css yaitudocument.querySelectorAll("input[type="range"]") //range-nya dikasih petik 2
        * arrowfunction adalah anonymous function, maka bila ditulis seperti capturedInput.forEach(elementInput => {}) ini, elementInput adalah parameter
        * jika parameter pada sebuah arrow function ada 2, maka gunakan sintaks seperti ini capturedInput.forEach( (parameter1,parameter2) => {}) parameter di dalam kurung
        * jika tidak ada parameter, bisa gunaka seperti ini capturedInput.forEach(() => {}) tanda kurungnya tetap harus ada
        * contoh arrow function seperti ini capturedInput.forEach(elementInput => {}) mirip dengan function anonymous biasa seperti ini capturedInput.forEach(function(elementInput) {})
        * untuk mendapatkan nilai sumbu X ataupun sumbu Y gunakan .clientX atau .clientY yang ditempelkan pada suatu object
        * untuk mendapatkan lebar/tinggi sebuah document (kotak putih pada website) maka gunakan window.innerWidth/window.innerHeight karena document itu satu tingkat di bawah window
        * window itu termasuk segala bagian browser
        * body apabila belum disetting/ditetapkan, maka ukurannya akan sama dengan content yang ditempati di suatu document, maka akalin dengan
        * html, body {height: 100%; width: 100%} 
        * html adalah bagian yang di luar body, kalau body hanya menempati di bagian konten berada, maka html harus di-assign juga seperti body

    */