// * DOM Manipulation 2
// * Manipulation NODE
/* 
    //* document.createElement("Nama Element html");
    //* document.createTextNode("insert text");
    //* namaNode.appendChild(namaNode);     note: appendChild simpan ke akhir dari sebuah element parent (letaknya di akhir sebuah element)
    //* namaNode.insertBefore(newNode/element, afterIndexNode/element);
    //* parent-node.removeChild(capturedNode/element);
    //* parent-node.replaceChild(newNode/element, theNodeThatWantToReplace)
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


// * coba 2, dengan menggunakan insertBefore
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("list baru made by King Javascript");
liBaru.appendChild(teksLiBaru);

// * ada 2 cara yang harus dilakukan dulu
//* ambil parent dari element yang ingin ditambahkan
const ul = document.querySelector("section#b ul");  //* ambil ul
//* insert before memerlukan pre-requierement, yaitu urutan element setelahnya
    //* tangkap element yang urutannya setelah element yang ingin ditambahkan
const li2 = ul.querySelector("section#b ul li:nth-child(2)");   //* mencoba mempersempit scope untuk performance

// * rumus : parent-node/node-tertentu.insertBefore(elementBaruYangTelahDibuat,ElementYangSetelahnya)
ul.insertBefore(liBaru, li2);



// * parent-node.removechild()
    //* coba menghilangkan/menghapus tag link di section A
        //* tangkap dulu element parent-nya
        //* karena parent-nya sudah ditangkap di atas. maka
        //* tangkap element (child) yang ingin dihapus di dalamnya 
    const capturedLink = sectionA.getElementsByTagName("a")[0];
        //* masukkan variabel element yang sudah ditangkap
    sectionA.removeChild(capturedLink); 


//* coba yang parent-node.replaceChild();
    //* mengganti paragraf 4 menjadi judul
        //* tangkap dulu parent-nya
const sectionB = document.getElementById("b");
        //* tangkap element yang ingin di-replace;
// const capturedP4 = sectionB.getElementsByTagName("p")[0];
const capturedP4 = sectionB.querySelector("p"); //* coba dengan querySelector dan scope yang dibatasi, karena tag p cuma 1 di section B dan itu berada di bagian awal, maka querySelector akan mengambil dan langsung me-return tag p tersebut
        //* buat tag h2 baru
const h2Baru = document.createElement("h2");
        //* buat text node baru untuk tag h2
const textH2Baru = document.createTextNode("Judul Baru made by Javascript");
        //* append text ke dalam tag h2
h2Baru.appendChild(textH2Baru);
        //* coba replace
        //* memakai parent terlebih dahulu
        //* parent-node.replaceChild();
sectionB.replaceChild(h2Baru, capturedP4);  
    //* ada 2 parameter, yaitu replaceChild(elementBaru, element yang di-replace); 

//* penandaan untuk element/node yang baru;
pBaru.style.color = "lightgreen";
pBaru.style.textShadow = "2px 2px 0 black"

liBaru.style.color = "lightgreen";
liBaru.style.textShadow = "2px 2px 0 black"

h2Baru.style.color = "lightgreen";
h2Baru.style.textShadow = "2px 2px 0 black"





















































