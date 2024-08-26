//* buat function, agar mudah dipanggil
function computerChoice(){
    const comp = Math.round(Math.random()*3);     //* ambil pilihan computer melalui angka random, gunakan method math.random dan jangan lupa dibulatkan
    console.log(comp);  //* pengecekan
    // if(comp < 2){
    //     return "gajah";     //* ganti yang awalnya meng-assign ke variabel yg constant (sudah pasti error) ke return
    // }else if( comp > 2 && comp < 3){
    //     return "orang";
    // }else{
    //     return "semut";
    // }

    //* atau versi yang lebih ringkas lagi
    if (comp < 2) return "gajah";                   //* contoh kasus: jika computer MEMILIH 3, maka ini diabaikan
    if (comp >= 2 && comp < 3) return "orang";       //* ini juga diabaikan
    return "semut";     //* maka langsung ke sini;

};

