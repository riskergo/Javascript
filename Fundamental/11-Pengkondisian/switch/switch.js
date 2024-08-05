// versi if
// var inputUser = prompt("Masukkan angka :");

/* if(inputUser == 2){
    alert("Angka yang anda masukkan adalah 2");
}else if (inputUser == 3) {
    alert("Angka yang anda masukkan adalah 3");
}else if(inputUser == 4){
    alert("Angka yang anda masukkan adalah 4");
}else {
    alert("Angka yang anda masukkan salah");
} */

// versi if tapi dengan perbedaan inputan
// karena prompt me-return string, bukan number/integer
// tapi tidak menghemat memory karena pengecekan if melakukan function

/* var inputUser = prompt("Masukkan angka :");
if(parseInt(inputUser) === 2){
    alert("Angka yang anda masukkan adalah 2");
}else if (parseInt(inputUser) === 3) {
    alert("Angka yang anda masukkan adalah 3");
}else if(parseInt(inputUser) === 4){
    alert("Angka yang anda masukkan adalah 4");
}else {
    alert("Angka yang anda masukkan salah");
} */

// lebih hemat memory
// karena hanya melakukan 1x fungsi
/* var inputUser = parseInt(prompt("Masukkan angka :"));
if(inputUser === 2){
    alert("Angka yang anda masukkan adalah 2")
}else if (inputUser === 3){
    alert("Angka yang anda masukkan adalah 3");
}else if(inputUser === 4){
    alert("Angka yang anda masukkan adalah 4");
}else{
    alert("Anda memasukkan angka yang salah");
} */


// versi switch
// dan string

/* var inputUser = prompt("Masukkan Angka");
switch(inputUser){
    case '1':
        alert("Angka yang anda masukkan adalah 1");
        break;
    case '2':
        alert("Angka yang anda masukkan adalah 2");
        break;
    case '3':
        alert("Angka yang anda masukkan adalah 3");
        break;
    case '4':
        alert("Angka yang anda masukkan adalah 4");
        break;
    default:
        alert("Anda memasukkan angka yang salah");
        break;
} */


// versi switch
// dan fungsi parseInt

/* var inputUser = parseInt(prompt("Masukkan Angka"));
switch(inputUser){
    case 1:
        alert("Angka yang anda masukkan adalah 1");
        break;
    case 2:
        alert("Angka yang anda masukkan adalah 2");
        break;
    case 3:
        alert("Angka yang anda masukkan adalah 3");
        break;
    case 4:
        alert("Angka yang anda masukkan adalah 4");
        break;
    default:
        alert("Angka yang anda masukkan salah");
        break;
} */


// contoh lain

let items = prompt("Masukkan nama makanan/minuman \n cth: nasi, daging, susu, junkfood, softdrink");
// ingat, pada case switch, hanya bisa memasukkan value, dan kondisi itu tidak bisa
/* switch(items){
    case 'nasi':
        alert("Makanan/minuman sehat");
        break;
    case 'daging':
        alert("Makanan/minuman sehat");
        break;
    case 'susu':
        alert("Makanan/minuman sehat");
        break;
    case 'junkfood':
        alert("Makanan/minuman tidak sehat");
        break;
    case 'softdrink':
        alert("Makanan/minuman tidak sehat");
        break;
    default:
        alert("Makanan/minuman yang anda masukkan tidak ada dalam list");
        break;
} */

// versi ringkas
// tapi.. (i don't know, what the deficiency is);

switch(items){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert("Makanan/minuman sehat");
        break;
    case 'junkfood':
    case 'softdrink':
        alert("Makanan/minuman tidak sehat");
        break;
    default:
        alert("Makanan/minuman yang anda masukkan tidak ada dalam list");
        break;
}