    
    
    
    //* ganti warna background body, tapi kurang optimal
// tangkap tag-nya
const changeBackgroundBody = document.getElementsByTagName("body")[0];
// ubah background
changeBackgroundBody.style.backgroundColor = "#ddd";


    //* ganti ukuran font pada judul
// tangkap id-nya
const judul = document.getElementById("judul besar");
judul.style.fontSize = "30pt"


    //* ganti background paragraf, berupa HTMLCollection
// tangkap tag2-nya
const kumpulanParagraf = document.getElementsByTagName("p");
// ubah melalui loop, dan gunakan method length karena berupa array
for(let i = 0; i < kumpulanParagraf.length; i++){
    kumpulanParagraf[i].style.backgroundColor = "lightblue";
}


    //* ganti ukuran font paragraf melalui class container, berupa HTMLCollection juga
const gantiFontParagraf = document.getElementsByClassName('container');
gantiFontParagraf[0].style.fontSize = "25pt"
