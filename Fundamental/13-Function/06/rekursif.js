// versi loop;
function cetakAngka(n){
    for(let i = n; i >= 1; i--){
        console.log(i);
    }
}
cetakAngka(10);


// fungsi rekursi adalah fungsi yang memanggil dirinya sendiri
// tapi harus ada basis-nya/base case (biasanya kondisi) agar berakhir dan menghasilkan (return) nilai 
// versi rekursif

console.log('===============================');

function cetakAngka2(n){
    if(n === 0 ){
        return;
    }

    console.log(n)
    return cetakAngka2(n-1);
}
cetakAngka2(10);


console.log("==============");

// faktorial versi rekursif
function factorialRekursif(n){
    if(n === 0){
        return 1;
    }
    return n * factorialRekursif(n-1);
}
console.log(factorialRekursif(5));

// faktorial versi loop
function factorialLoop(n){
    let hasil = 1;
    
    for(let i = n; i > 0; i--){
        hasil *= i;
    }
    return hasil;
}

console.log(factorialLoop(5));