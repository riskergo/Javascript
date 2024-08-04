let jmlAngkot = 10;
let angkotBeroperasi = 6;


/* for(let nomorAngkot = 1; nomorAngkot <=jmlAngkot; nomorAngkot++){
    if((nomorAngkot === 8) || (nomorAngkot === 10) || (nomorAngkot === 5)){
        console.log("Angkot No." + nomorAngkot + " sedang lembur.");
    }else if (nomorAngkot <= angkotBeroperasi){
        console.log("Angkot No." + nomorAngkot + " beroperasi dengan baik.");
    }else {
        console.log("Angkot No." + nomorAngkot + " sedang tidak beroperasi");
    }
} */


// lebih efisien
// mengapa ?, karena dibanding yang di atas, yg ini tidak perlu pengecekan operator logika lebih banyak pada flow awal kondisi if
for(let nomorAngkot = 1; nomorAngkot <= jmlAngkot; nomorAngkot++){
    if(nomorAngkot <= angkotBeroperasi && nomorAngkot !== 5){
        console.log("Angkot No." + nomorAngkot + " beroperasi dengan baik.");
    }else if((nomorAngkot === 5) || (nomorAngkot === 8) || (nomorAngkot === 10)){
        console.log("Angkot No." + nomorAngkot + " sedang lembur.");
    }else {
        console.log("Angkot No." + nomorAngkot + " sedang tidak beroperasi.")
    }
}