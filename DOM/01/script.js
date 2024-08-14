

// beberapa jenis DOM Selection

//* document.getElementById();

// mengembalikan/return element
// tetapi cuma 1 element tapi beserta semua node di dalamnya termasuk attribute, dll;
// cek di console log berdasakan nama variabelnya

const judulJS = document.getElementById("judul");       // tangkap id-nya

// mengubah warna teks
judulJS.style.color = 'red';
// mengubah background color
judulJS.style.backgroundColor = "#ddd"
// mengubah teks
judulJS.innerHTML = "Welcome Tarnished"


//* document.getElementsByTag();

// mengembalikan/return element-element yang banyak
// atau disebut HTMLCollection
// HTMLCollection ini berbentuk array tapi tidak memiliki semua method array
// cek di console.log

const paragraf = document.getElementsByTagName('p');     // tangkap tag-nya

// mengganti background paragraf

// karena HTMLCollection itu adalah array, maka:
// paragraf[0].style.backgroundColor = "lightblue";    // tambahkan indexnya

// jikalau ingin mengubah semuanya, maka gunakan loop
for(let i = 0; i < paragraf.length; i++){
    paragraf[i].style.backgroundColor = "lightblue";
}

// membuat HTMLCollection menjadi element
// cek di console.log

// sebelum
// const h1 = document.getElementsByTagName("h1");     // HTMLCollection

// sesudah
const h1 = document.getElementsByTagName("h1")[0];      // tangkap tag-nya tapi-
// tambahkan indexnya, maka menjadi element
h1.style.fontSize = '50px'



//* document.getElementsByClassName
// mengembalikan HTMLCollection
const paragrafClass = document.getElementsByClassName("p1");
// karena ini HTMLCollection maka
paragrafClass[0].innerHTML = "Kentung Irony"

// atau bisa juga menggunakan metode seperti getElementsByTagName di atas
// agar menjadi element
const paragrafClass2 = document.getElementsByClassName("p2")[0];  // tambahkan index
paragrafClass2.innerHTML = "Davuanqo Quandaro mengubah ini melalui javascript"




