
//* cara dengan css, gunakan psedo-class :active, tapi tidak efektif

        //* Event Handler
//* 1. Inline HTML Attribute (tidak disarankan karena mengotori Html)
    //* ubah paragraf 3
//* tangkap paragraf 3
const p3 = document.querySelector("section#a .p3");

//* buat function
function ubahWarna() {
    p3.style.backgroundColor = "lightGreen";
}

//* tambahkan function tersebut ke dalam attribute di inline HTML, attribute onClick

        //*Element Method
    //* .(method)onclick(onclick adalah event-nya);
    //* ubah paragraf 2
//* tangkap paragraf 2
const p2 = document.getElementsByClassName('p2')[0];

//* buat function
function ubahWarnaP2() {
    p2.style.backgroundColor = "lightGreen";
}

//* gunakan onclick juga
p2.onclick = ubahWarnaP2;       //* tidak usah menggunakan kurung, apabila digunakan, maka javascript otomatis menjalankan function tersebut, tidak sesuai dengan event-nya


        //* addEventListener(); fungsinya sama saja tapi lebih baru dari onClick, tapi di mana perbedaannya?
//* ketika paragraf 4 di-klik tambah list baru di section b
    //* tangkap paragraf 4
const p4 = document.querySelectorAll("section#b p")[0];

    //* gunakan method-nya dengan 2 parameter ("event-nya", anonymousFunction(){ action })
p4.addEventListener("click", function() {

    //* buat element baru dan teks node-nya 
    const liBaru = document.createElement("li");
    const teksLiBaru = document.createTextNode("list baru made by Javascript addEventListener()");

    //* tangkap parent dari list, yaitu ul
    const capturedUL = document.querySelector("section#b ul");
    liBaru.appendChild(teksLiBaru);
    capturedUL.appendChild(liBaru);
})
    //* dari fungsi di atas, maka setiap paragraf 4 di-klik, maka akan membuat element baru dan menambahkannya(menyatukan) pada list yang berada di dalam section B 


//* jadi apa perbedaannya?
    //* tangkap item 1
const capturedList1 = document.querySelector("section#b li:nth-child(1)");
        //* dengan menggunakan event Handler dan anonymous function
capturedList1.onclick = function(){
    capturedList1.style.backgroundColor = "tomato";
}
capturedList1.onclick = function(){
    capturedList1.style.color = "white";
}
    //* maka, yang terjadi di sini adalah, event Handler itu menimpa perubahan yang sebelumnya dilakukan
    //* yaitu, awalnya ingin mengubah background item 1 menjadi warna tomato tapi dengan adanya-
    //* event handler yang baru di bawahnya, maka ditimpa lah

    //* tangkap item 2
const capturedList2 = document.querySelector("section#b li:nth-child(2)");
    //* dengan menggunakan addEventListener
capturedList2.addEventListener("click", function() {
    capturedList2.style.backgroundColor = "tomato";
});

capturedList2.addEventListener("click", function() {
    capturedList2.style.color = "white";
});