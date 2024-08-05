

let tanya = true
while (tanya){

    // catch player option
    let player = prompt("Masukkan pilihan : \nGajah(1)\nOrang(2)\nSemut(3)");
    if (player === '1' || (player === "Gajah" || player === 'gajah')) {
        player = 'Gajah';
    } else if (player === '2' || (player === "Orang" || player === 'orang')) {
        player = 'Orang';
    } else if (player === '3' || (player === "Semut" || player === 'semut')) {
        player = 'Semut';
    } else {
        player = "inputan tidak valid";
    }


    // catch computer option
    // generate a random number

    let computer;

    if(player == 'inputan tidak valid'){
        computer == undefined;
    }else {
        
        for(let i = 1; i <= 1; i++){

            computer = Math.floor(Math.random() * 3) + 1;

            if (computer < 2) {
                computer = 'Gajah';
            } else if (computer > 2) {
                computer = 'Semut';
            } else {
                computer = 'Orang';
            }

        }

    }


    

    let hasil;
    // menentukan rules
    if (player == computer) {
        hasil = 'Seri';
    } else if (player == 'Gajah') {

        if (computer == 'Semut') {
            hasil = "Anda kalah"
        } else {
            hasil = 'Anda menang';
        }

    } else if (player == 'Semut') {

        if (computer == 'Orang') {
            hasil = 'Anda kalah';
        } else {
            hasil = 'Anda menang';
        }

    } else if (player == 'Orang') {
        if (computer == 'Gajah') {
            hasil = 'Anda kalah';
        } else {
            hasil = 'Anda menang';
        }
    } else {
        hasil = "Player menginputkan pilihan yang salah";
    }

    // tampilkan hasilnya
    alert('Pilihan Player : ' + player + "\n" + "Pilihan Komputer : " + computer + '\n' + "Hasilnya : " + hasil)


tanya = confirm("Lagi?")
}