//* DOM Selection

//* document.querySelector();
//* selector itu kalau di css seperti :
//* id,class,tag,pseudo-class,pseudo-elements, select by attribute and value
//* dan querySelector() --> menghasilkan sebuah element (1)


//* coba ambil p4 yang tadi
    // const p4 = document.querySelector('#b p');
    // p4.style.color = "red";
    // p4.style.fontSize = '20pt'

//* coba ambil list yang tadi
    // const list2 = document.querySelector("section#b ul li:nth-child(2)");
    // list2.style.backgroundColor = "lightblue";

    /* const p = document.querySelector("p");
    p.innerHTML = "diubah melalui javascript"; */
//* karena querySelector mengembalikan 1 element saja, maka code ini tidak mengambil
//* seluruh tag p


//* maka gunakan ini
// * document.querySelectorAll();
// * mengembalikan/return nodelist, bukan HTMLCollection
// * nodelist juga sebuah array, maka menggunakan index
    // const kumpulanParagraf = document.querySelectorAll("p");
    // for(let i = 0; i < kumpulanParagraf.length; i++){
    //     kumpulanParagraf[i].style.backgroundColor = "lightgreen";
    // }


// * pilih mana ?
// * tergantung situasi, jika target yang dimiliki sudah ada ID atau class, gunakan getElem...
// * kalau tidak, maka :
// * tambahan, kedua DOM Selections (querySelector dan querySelectorAll) ini disarankan digunakan saat struktur html-nya tidak diubah
// * dan keduanya harus sedikit spesifik memasukkan selectornya, tidak seperti tiga method sebelumnya

/* 
    //* elementById dan tagName dari segi peforma lebih cepat, maka dianjurkan menggunakan antara 2 method tersebut
*/

// * memperkecil scope/lingkup pencarian sebuah method dengan mengubah node root-nya
// * contoh:
    // const sectionA = document.querySelector("section#a")         // tangkap melalui querySelector yang sedikit spesifik
    // const paragraf2 = sectionA.getElementsByTagName("p")[1];     // tangkap melalui tagname dengan index ke-1 dari variabel yang sudah ditangkap melalui queryselector
    // paragraf2.style.backgroundColor = "lightgreen"

// * versi yang lain
const sectionA = document.getElementById("a");      // tangkap melalui byId
const paragraf3 = sectionA.querySelector(".p3");    // tangkap melalui querySelector dengan menggunakan class dari variabel yang sudah ditangkap melalui byID
paragraf3.style.color = "white"
paragraf3.style.backgroundColor = "tomato"

//* versi yang performance-nya cepat  
// * karena menggunakan 2 methods yang cepat
const sectionB = document.getElementById("b");
const paragraf4 = sectionB.getElementsByTagName("p")[0];        //* karena getElementsByTagName mengembalikan HTMLCollection berbentuk array, maka, tambahkan index
                                                                // * walaupun jumlah elementnya cuma 1 yang ditangkap
paragraf4.style.backgroundColor = "lightblue"       // ubah style-nya




