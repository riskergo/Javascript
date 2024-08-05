
// notifikasi alert tebak angka
alert("Tebak angka");


// computer's option
let angkaComputer = Math.floor(Math.random() * 10 + 1)
// chances
let kesempatan = 3;
// player's option
let angkaPlayer;

// result
let hasil;

// questions
alert("Masukkan angka, dari 1 - 10\nKamu punya " + kesempatan + " kesempatan");


// looping
for(let i = kesempatan; i > 0; i--){

    // catch player's option
    angkaPlayer = parseInt(prompt("Masukkan angka tebakan"));
    
    // conditioning
    if(angkaPlayer == angkaComputer){

        hasil = "kamu BENAR"
        alert("Selamat, " + hasil + "\nAngka yang kamu pilih : " + angkaPlayer + "\nAngka yang komputer pilih : " + angkaComputer)
        break;

    }else if( (angkaPlayer == null) || (angkaPlayer == "") || (angkaPlayer == " ") || (angkaPlayer == "  ") ){

        alert("Tolong masukkan angka !");
        i++;

    }else if ((angkaPlayer < angkaComputer)) {

        kesempatan--;
        hasil = "Terlalu RENDAH";
        if( (kesempatan != 0) ){
            alert(hasil + "\nKamu masih mempunyai " + kesempatan + "x kesempatan");
        }else {
            alert("Kesempatan kamu habis, kamu KALAH");
        }

    }else if ( (kesempatan != 0) && (angkaPlayer > angkaComputer) ){

        kesempatan--;
        hasil = "Terlalu Tinggi";

        if( (kesempatan != 0) ){
            alert(hasil + "\nKamu masih mempunyai " + kesempatan + "x kesempatan");
        }else {
            alert("Kesempatan kamu habis, kamu KALAH");
        }

    }else {
        alert("Yang anda masukkan bukan angka\nAnda masih ada " + kesempatan + "x kesempatan")
        i++;
    }
}

alert("Bye");