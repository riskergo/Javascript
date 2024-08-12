// array penumpang
let penumpang = ["okre", undefined, "askor"];

// tambah penumpang
// function expression
let tambahPenumpang = function(nama){

    // jika angkot kosong
    if(penumpang.length == 0){

        // push array
        penumpang.push(nama);
        // return penumpang
        return penumpang;


    //  jika angkot penuh
    } else if(penumpang.length == 15){
        
        // tampilkan ke layar
        console.log("Angkot penuh")
        // return agar keluar dari function
        return penumpang;


    // jika angkot tidak kosong
    }else {

        // cek satu persatu array
        for(let i = 0; i < penumpang.length; i++){

            // jika ada yang undefined atau kosong
            if(penumpang[i] == undefined){
                // penumpang diletakkan di situ
                penumpang[i] = nama;
                // return penumpang & keluar dari function
                return penumpang;

            // jika ada nama penumpang yang sama
            }else if(penumpang[i] == nama){

                // tampilkan ke layar
                console.log(nama + " sudah ada di dalam angkot");
                // return penumpang dan keluar dari function
                return penumpang;

            // jika tersedia kursi kosong di akhir dan semua kursi terisi
            }else if(i == (penumpang.length - 1) ) {

                // letakkan penumpang di kursi terakhir tsb
                penumpang.push(nama);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }

        }
    }
}

