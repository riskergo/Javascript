
// tanpa refactoring

function menjumlahkanVolumeKubus(a,b){
    var Volume1;
    var volume2

    var total;

    Volume1 = a * a * a;
    volume2 = b * b * b;

    total = Volume1 + volume2;

    return total;
}


console.log(menjumlahkanVolumeKubus(8,3));


// dengan refactoring
// lebih hemat memory karena tidak ada variabel yang dibuat dan digunakan sementara
function menjumlahkanVolumeKubus2(a,b){
    return a*a*a + b*b*b;
}

console.log(menjumlahkanVolumeKubus2(8,3))

