//* Tagged Template
/* 

    //* it's a form that more complex than template literals
    //* it allows us to read template literals through a function

*/

//* contoh kasus
// const nama = "koree antonion";
// const umur = 33;

//* common template literals 
    // const str = `nigg, my name is ${nama} and i'm ${umur}year-old nigga`;
    

// function coba(strings, ...args){        //* secara default, tagged template bisa menerima parameter/argument
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
    // return strings.reduce((result, str, index) => {
    //    return `${result}${str}${args[index] || ""}`
    // }, "" );
// }
//* turn into tagged template
// const gg = coba`nigg, my name is ${nama} and i'm ${umur} year-old nigga`;
// console.log(gg);




//* contoh implementasi sederhana
//* mencari string hasil pencarian berdasarkan keyword tertentu
    //* highlight

const nama = "koree";
const umur = 12;

function highlight(strings, ...args){

    //* reduce()    mempunyai dua parameter wajib yaitu: reduce(accumulator, currentValue, index(opsional) );
    //* accumulator di sini sebagai hasil yang telah digabungkan dari currentValue-nya  atau bisa dianggap hasil gabungan yang awal mulanya kosong
    //* dan currentValue di sini sebagai element-element yang berada di dalam array yang diulang 
    //* lalu index adalah nomor index dalam array yang diulang
            //* index di konteks ini berfungsi sebagai mengulang/looping agar expression ...args bisa ditambahkan juga
    return strings.reduce( (result, string, index) => `${result}${string}<span class="highlight">${args[index] || ""}</span>`, "") 
    //* string kosong setelah template literals berfungsi sebagai nilai awal, biasanya 0 tapi di sini kasusny adalah string bukan angka
}

//* membuat nama dan umur ada highlight-nya, karena keduanya adalah values 
const str = highlight`guha, ${nama} dan berumur ${umur} thn`;

console.log(str);

document.body.insertAdjacentHTML("beforeend", str);