let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No." + noAngkot + " Beroperasi dengan baik.")
    }else{
        console.log("Angkot No." + noAngkot + " Sedang tidak beroperasi.")
    }
}

console.log("Bye bro");