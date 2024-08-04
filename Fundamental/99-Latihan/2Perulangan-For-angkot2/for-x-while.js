// while

var nomorAngkot = 1;
var AngkotBeroperasi = 7;
var jmlAngkot = 10;


while(nomorAngkot <= AngkotBeroperasi){
    console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik.")
nomorAngkot++;
}

// insight baru, ternyata setelah loop di atas
// variabel nomor angkot adalah 7
// mari kita cek;
console.log(nomorAngkot);


// atau coba cara ini
// agar dinamis saat mengubah jumlah angkot yang beroperasi
for(nomorAngkot = AngkotBeroperasi + 1; nomorAngkot <= jmlAngkot; nomorAngkot++){
    console.log("Angkot No. " + nomorAngkot + " sedang tidak beroperasi.")
}


// cara ini, tapi tidak sesuai dengan nama variabel
/* for(AngkotBeroperasi += 1; AngkotBeroperasi <= jmlAngkot; AngkotBeroperasi++){
    console.log("Angkot No. " + AngkotBeroperasi + " sedang tidak beroperasi.")
} */