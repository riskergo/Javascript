let jmlAngkot = 10;
let angkotBeroperasi = 6;
// let angkotLembur = 2;

for(let nomorAngkot = 1; nomorAngkot <=jmlAngkot; nomorAngkot++){
    if(nomorAngkot <= angkotBeroperasi){
        console.log("Angkot No." + nomorAngkot + " beroperasi dengan baik.");
    }else if (nomorAngkot === 8){
        console.log("Angkot No." + nomorAngkot + " sedang lembur.");
    }else {
        console.log("Angkot No." + nomorAngkot + " sedang tidak beroperasi");
    }
}
