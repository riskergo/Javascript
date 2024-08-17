// * DOM Manipulation 2
// * Manipulation NODE
/* 
    //* document.createElement("Nama Element html");
    //* document.createTextNode("insert text");
    //* namaNode.appendChild(namaNode);     note: appendChild simpan ke akhir dari sebuah element parent (letaknya di akhir sebuah element)

*/
// * coba 1
    //* buat variabel untuk element yang diinginkan
const pBaru = document.createElement('p');
    //* buat variabel untuk teksnya
const teksPBaru = document.createTextNode("Paragraf baru made by Javascript DOM");
    //* satukan element yang baru dibuat dengan teks node-nya
    // * menggunakan appendChild
pBaru.appendChild(teksPBaru);

    //* buat variabel untuk menangkap sebuah element dengan method DOM Selection
const sectionA = document.getElementById("a"); //* di sini mengambil section A sebagai parent element
    //* satukan element baru dengan element yang ditangkap
sectionA.appendChild(pBaru);


// * coba 2 dengan menggunakan insertBefore
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("list baru made by King Javascript");
liBaru.appendChild(teksLiBaru);

// * ada 2 cara yang harus dilakukan terlebih dahulu
    //* ambil parent dari element yang ingin ditambahkan
const ul = document.querySelector("section#b ul");  //* ambil ul
    //* tangkap element yang urutannya setelah element yang ingin ditambahkan
const li2 = ul.querySelector("section#b ul li:nth-child(2)");   //* mencoba mempersempit scope untuk performance

// * rumus : parent-node/node-tertentu.insertBefore(elementBaruYangTelahDibuat,ElementYangSetelahnya)
ul.insertBefore(liBaru, li2);


