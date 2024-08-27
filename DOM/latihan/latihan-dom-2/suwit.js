//* buat function, agar mudah dipanggil
function getComputerChoice(){
    const comp = Math.round(Math.random()*3);     //* ambil pilihan computer melalui angka random, gunakan method math.random dan jangan lupa dibulatkan
    // console.log(comp);  //* pengecekan
    // if(comp < 2){
    //     return "gajah";     //* ganti yang awalnya meng-assign ke variabel yg constant (sudah pasti error) ke return
    // }else if( comp > 2 && comp < 3){
    //     return "orang";
    // }else{
    //     return "semut";
    // }

    //* atau versi yang lebih ringkas lagi
    if (comp < 2) return "gajah";                    //* contoh kasus: jika computer MEMILIH 3, maka ini diabaikan
    if (comp >= 2 && comp < 3) return "orang";       //* ini juga diabaikan
    return "semut";                                  //* maka langsung ke sini;

};

function getHasil(comp,player){
    // let hasil = ''; //* tidak perlu variabel ini, karena langsung aja return
    
    //* rules
    if (player == comp){ return "SERI!"};
    if (player == "gajah") {
        return (comp == "orang") ? 'MENANG!' : 'KALAH!';      //* ini adalah ternary, versi ringkas-nya if else
    };
    if ( player == "orang" ) {
        return (comp == "semut") ? 'MENANG!' : 'KALAH!';
    };
    //* coba konversi ternary ke if else untuk rules semut
    //* versi ternary : if (player == "semut"){ return (comp == "gajah") ? "MENANG!" : "KALAH!" };
    if (player == "semut"){
        if (comp == "gajah"){
            return "MENANG!";
        }else {
            return "KALAH!";
        }
    }
};

//* sedikit tambahan, konsep TIMING pada javascript
//* seolah-olah pilihan computer seperti teracak
const waktuMulai = new Date().getTime() ;

function gambarAcakForComputer(){
    const imgComputer = document.querySelector(".img-komputer");
    const listGambar = ['gajah', 'semut', 'orang'] ;
    let i = 0;
    const waktuMulai = new Date().getTime() ;
        //* cek di wpu quick tip timing events
        setInterval(function() {
            if( new Date().getTime() - waktuMulai > 1000){
                clearInterval;
                return;
            }

            imgComputer.setAttribute("src", "img/"+listGambar[i++]+".png")
            if(i == listGambar.length) i = 0;
        }, 100);
};


const areaKomputerForSCORE = document.querySelector(".area-komputer");
const areaPlayer = document.querySelector(".area-player");
const capturedComputerIMG = areaKomputerForSCORE.querySelector("img");
const capturedPlayerList = areaPlayer.querySelector("ul");

const papanScoreKomputer = document.createElement("p");
papanScoreKomputer.classList.add("score")
papanScoreKomputer.classList.add("computer")
papanScoreKomputer.setAttribute("min", '0')
papanScoreKomputer.textContent = "Komputer : " + papanScoreKomputer.getAttribute("min");

const papanScorePlayer = document.createElement("p");
papanScorePlayer.classList.add("score")
papanScorePlayer.classList.add("player")
papanScorePlayer.setAttribute("class", "score player")
papanScorePlayer.setAttribute("min", '0')
papanScorePlayer.textContent = "Player : " + papanScorePlayer.getAttribute("min");


capturedComputerIMG.before(papanScoreKomputer);
capturedPlayerList.after(papanScorePlayer);


let skorKomputer = papanScoreKomputer.getAttribute("min")
let skorPlayer = papanScorePlayer.getAttribute("min")

    //* versi EFEKTIF, gunakan loop/perulangan
//* tangkap dengan hasil berupa nodelist, bukan htmlcollection
const choices = document.querySelectorAll("li img");    //* berupa nodelist
choices.forEach(function (elementImage){ //* parameter bernama elementImage itu merepresentasikan sebuah element, 
                                         //* atau kasusnya di sini elementImage adalah masing-masing image yang ditangkap dari nodeList
                                         //* silahkan lihat keterangan dengan ctrl + space di javascript saat membuat function di method forEach
                                         //* atau lebih jelasnya lihat penjelasan mengenai method forEach
    // console.log(elementImage);           //* hasilnya adalah element/tag image
    elementImage.addEventListener('click', function(){
        const pilihanComputer = getComputerChoice();
        // console.log("comp: "+pilihanComputer)       //* pengecekan
        const pilihanPlayer = elementImage.className;
        // console.log("player: "+ pilihanPlayer);     //* pengecekan
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        // console.log("hasil: "+ hasil);     //* pengecekan


        gambarAcakForComputer();

        //* setTimeOut untuk mengatur delay-nya, yaitu 1 detik / 1000ms
        setTimeout(function(){
            const gambarComputer = document.querySelector(".area-komputer .img-komputer");
        // console.log(gambarComputer);     //* pengecekan
            const boxInfo = document.querySelector(".container .info")
        // console.log(boxInfo);            //* pengecekan
            gambarComputer.setAttribute("src", "img/"+pilihanComputer+".png");
            boxInfo.textContent = hasil;

            if(hasil == "KALAH!"){
                skorKomputer++;
                papanScoreKomputer.textContent = "Komputer : "+skorKomputer+""
            }
            if(hasil == "MENANG!"){
                skorPlayer++;
                papanScorePlayer.textContent = "Player : "+skorPlayer+""
            }
        },1010)
    });
});







//* versi kurang efektif
    //* tangkap pilihan player jika memilih gajah
/* const pGajah = document.querySelector(".area-player ul li img[class=gajah]");
//* tambahkan event
pGajah.addEventListener("click", function(){
    //* buat variabel untuk menampung pilihan komputer
    const pilihanComputer = getComputerChoice();
    console.log("pilihan computer: "+pilihanComputer)    //* pengecekan
    //* buat variabel untuk menampung pilihan player
    const pilihanPlayer = pGajah.className //* karena element yang diambil memiliki
                                            //*class gajah yang sama dengan rules suwit (string-nya sama), jadikan saja itu sebagai value variabelnya
    console.log("pilihan player: " + pilihanPlayer)      //* pengecekan
     //* jalankan function getHasildengan parameter variabel yang sudah dibuat tadi
     const hasil =  getHasil(pilihanComputer, pilihanPlayer);
     console.log("hasil : "+hasil)             //* pengecekan

    //* tangkap gambar komputer
     const gambarComputer = document.getElementsByClassName("img-komputer")[0];
     gambarComputer.setAttribute("src", "img/" +pilihanComputer+ ".png")
     //* tangkap box info
     const boxInfo = document.querySelector(".container .info")
     boxInfo.textContent = hasil;
});

const pOrang = document.querySelector(".area-player ul li img[class=orang]");
//* tambahkan event
pOrang.addEventListener("click", function(){
    //* buat variabel untuk menampung pilihan komputer
    const pilihanComputer = getComputerChoice();
    console.log("pilihan computer: "+pilihanComputer)    //* pengecekan
    //* buat variabel untuk menampung pilihan player
    const pilihanPlayer = pOrang.className //* karena element yang diambil memiliki
                                            //*class gajah yang sama dengan rules suwit (string-nya sama), jadikan saja itu sebagai value variabelnya
    console.log("pilihan player: " + pilihanPlayer)      //* pengecekan
     //* jalankan function getHasildengan parameter variabel yang sudah dibuat tadi
     const hasil =  getHasil(pilihanComputer, pilihanPlayer);
     console.log("hasil : "+hasil)             //* pengecekan

    //* tangkap gambar komputer
     const gambarComputer = document.getElementsByClassName("img-komputer")[0];
     gambarComputer.setAttribute("src", "img/" +pilihanComputer+ ".png")
     //* tangkap box info
     const boxInfo = document.querySelector(".container .info")
     boxInfo.textContent = hasil;
});

const pSemut = document.querySelector(".area-player ul li img[class=semut]");
//* tambahkan event
pSemut.addEventListener("click", function(){
    //* buat variabel untuk menampung pilihan komputer
    const pilihanComputer = getComputerChoice();
    console.log("pilihan computer: "+pilihanComputer)    //* pengecekan
    //* buat variabel untuk menampung pilihan player
    const pilihanPlayer = pSemut.className //* karena element yang diambil memiliki
                                            //*class gajah yang sama dengan rules suwit (string-nya sama), jadikan saja itu sebagai value variabelnya
    console.log("pilihan player: " + pilihanPlayer)      //* pengecekan
     //* jalankan function getHasildengan parameter variabel yang sudah dibuat tadi
     const hasil =  getHasil(pilihanComputer, pilihanPlayer);
     console.log("hasil : "+hasil)             //* pengecekan

    //* tangkap gambar komputer
     const gambarComputer = document.getElementsByClassName("img-komputer")[0];
     gambarComputer.setAttribute("src", "img/" +pilihanComputer+ ".png")
     //* tangkap box info
     const boxInfo = document.querySelector(".container .info")
     boxInfo.textContent = hasil;
}); */

