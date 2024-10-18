//* Tagged Template
/* 

    //* it's a form that more complex than template literals
    //* it allows us to read template literals through a function

*/

//* contoh kasus
const nama = "koree antonion";
const umur = 33;

//* common template literals 
    // const str = `nigg, my name is ${nama} and i'm ${umur}year-old nigga`;
    

function coba(strings, ...args){        //* secara default, tagged template bisa menerima parameter/argument
    // return `kasdo`  //* di konsol ini
    //* jikalau di-return parameternya, maka
    // return strings  //* menghasilkan array, prosesnya memecah beberapa string (dipisahkan oleh expression) lalu disimpan ke dalam array
    //* dan jikalau tidak ada expression, string-nya tidak dipecah atau disatukan tapi tetap dalam bentuk array

    //* lalu kemana pergi expression?, masuk ke dalam parameter berikutnya

    //* ada kemungkinan bahwa kedepannya kita tidak tahu jumlah expression di dalam template literals-nya
    //* modern javascript mempunyai fitur untuk menampung hal tersebut, gunakan ... nama_argumentnya di parameter tsb
    //* biasa disebut rest parameter
    // return args;        //* berbentuk sebuah array yang berisi seluruh expression dari template literals-nya


    //* contoh kasus, menggabungkan seluruh string yang persis sama
    // let result = ''    //* temporary variabel
    //* menggunakan forEach
    // strings.forEach((string, index) => {
        // result = `${result}${string} ${args[index] || ""}`   //* operator or berfungsi sebagai pengkondisian, jikalau args ada isinya: tampilkan, jika tidak: tampilkan string kosong;
        // result += `${string} ${args[index] || ""}`;          //* agar undefined tidak keluar
    // });

    // return result;

    //* versi sangat gampangnya, menggunakan hof .reduce
    return strings.reduce((result, str, index) => {
       return `${result}${str}${args[index] || ""}`
    }, "" );


}
//* turn into tagged template
const gg = coba`nigg, my name is ${nama} and i'm ${umur} year-old nigga`;
console.log(gg);