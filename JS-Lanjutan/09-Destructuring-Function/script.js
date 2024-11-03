
function penjumlahanXperkalian(a,b){
    return [a+b, a*b];
};

const hasil = penjumlahanXperkalian(2,3);
// console.log(hasil);

const penjumlahan = penjumlahanXperkalian(2,3)[0];
// console.log(penjumlahan);

const perkalian = penjumlahanXperkalian(2,3)[1];
// console.log(perkalian);


    //* destructuring return value
const [jumlah, perkalian9] = penjumlahanXperkalian(2,3);
// console.log(jumlah,`dan`, perkalian9);



//* next case, the return value is added
function kalkulasi(a,b){
    return [a+b, a-b, a*b, a/b ];
}

const [pertambahan1, pengurangan1, perkalian1, pembagian1] = kalkulasi(10,2);
// console.log(pertambahan1, pengurangan1, perkalian1, pembagian1);


//* next case, default value
function kalkulasi2(a,b){
    // return [a+b, a-b, a*b];
    return [a+b, a-b, a*b, a/b];
}

const [pertambahan2, pengurangan2, perkalian2, pembagian2 = "Kosong"] = kalkulasi2(10,2);
// console.log(pertambahan2, pengurangan2, perkalian2, pembagian2)


//* next case, tidak memedulikan urutan jadi gunakan object destructuring
function kalkulasi3(a,b){
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b,
    };
}

const {kurang, bagi, tambah, kali} = kalkulasi3(10,2);
// console.log(kurang, bagi, tambah, kali);

//* case, change the name of variable

const {kurang: kr1, bagi: bg1, tambah: tb1, kali: kl1} = kalkulasi3(20, 4);
// console.log(kr1, tb1, kl1, bg1);




    //* destructuring function arguments

// const mhs1 = {
//     nama: "Koree",
//     nickName: "Mister Irony",
//     email: "misterIronyGG@koree.com",
// }

// const mhs2 = {
//     nama: "Rusdi",
//     nickName: "Barber Irony",
//     email: "barberIrony@rusdi.com",
// }

// const mhs3 = {
//     nama: "Fuad",
//     nickName: "Mister Fuad Irony",
//     email: "theFuad@fuad.com",
// }


function CreateMHS(nama, nickName, email){
    this.nama = nama;
    this.nickName = nickName;
    this.email = email;
}

const mhs1 = new CreateMHS("Koree", "Mister Irony", "misterIronyGG@koree.com");
const mhs2 = new CreateMHS("Rusdi", "Barber Irony", "barberIrony@rusdi.com");
const mhs3 = new CreateMHS("Fuad", "Mister Fuad Irony", "theFuad@fuad.com");

    //* 2 cara biasa menggunakan function declaration
//* cetak 1
function cetak1(nama, nickname){
    return `guha ${nama}, nick guha ${nickname}`;
}
//* argument yang dilempar adalah object yang telah dipecah
// console.log(cetak1(mhs1.nama, mhs1.nickName));

//* cetak 2
function cetak2(objectMhs){
    return `guha ${objectMhs.nama}, nick guha ${objectMhs.nickName}`;
}
// console.log(cetak2(mhs2));


    //* dengan menggunakan destructuring function
function cetak3({nama, nickName}){
    return `guha ${nama}, nick guha ${nickName}`
}
//* lempar object
// console.log(cetak3(mhs3));

//* digunakan untuk object yang kompleks, contoh kasus

const objKompleks = {
    Nama: "Madara",
    Clan: "Uchiha",
    Doujutsu: "Sharingan and Rinnegan",
    Jutsu: {
        first: "Susanoo",
        second: "Mokuton",
        third: "Rinne Tensei Gedo Mazo",
        fourth: "Tengai Shinsei"
    }
}

function printCharacter({Nama:nama, Clan:clan, Doujutsu:doujutsu, Jutsu: {first} }){
    return `Chara: ${nama}, clan: ${clan} and the ability: ${doujutsu} with ${first}`
}

console.log(printCharacter(objKompleks))






