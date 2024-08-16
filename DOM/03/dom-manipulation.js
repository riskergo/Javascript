
//* innerHTML = "value"
    //* tangkap element html melalui ID
// const judul = document.getElementById("judul");
// judul.innerHTML = "Welcome Traveler";
    //* coba di section #a
    // * tangkap ID menggunakan querySelector
/* const sectionA = document.querySelector("section#a");
sectionA.innerHTML = `<div><p>paragraf1</p><a href="#">osakr</a></div>` */
//* note : innerHTML bisa mengisi apapun ke dalam tag html yg ditangkap
// * tidak hanya teks, tapi bisa yg lain seperti tag html dll





//* style.(property-css) = "value yang seperti css"
    //* tangkap ID judul melalui querySelector
// const judul = document.querySelector("#judul")
    // * ubah warna background 
// judul.style.backgroundColor = "lightblue";
    // * ubah warna teks
// judul.style.color = "black"
    // * ubah font-weight
// judul.style.fontWeight = "700"





//* set/get/removeAttribute();
//* .setAttribute("attribute", "value");
//* memanipulasi attribut apasaja yang terdapat di dalam tag HMTL
    //* tangkap elementnya, di sini gunakan byTagName
// const judul = document.getElementsByTagName("h1")[0];   //? jgn lupa tambahkan array
    //* tambahkan attribute name
// judul.setAttribute("name", "judulnya");  //* cek console
    //* setAttribute ini akan menimpa(replace) attribute apabila attribute itu sudah ada
    //* kalau tidak ada maka akan ditambahkan

//* coba yang lain, tapi dengan querySelector
// const a = document.querySelector("section#a a");
//* .getAttribute("namaAttribute-nya")
    // * cari attribut ID
// judul.getAttribute("id");


//* .removeAttribute("namaAttribut-nya");
    //* coba hapus attribute href
// a.removeAttribute("href");




// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");      //* ini tidak bisa karena akan menimpa class
//* maka harus digunakan ->
//* element.classList();
// * terbagi menjadi :
    /* 
        //* element.classList.add();        // menambahkan class baru
        //* element.classList.remove();     // menghilangkan class yang ada
        //* element.classList.toggle();     // unik, apabila belum ada, toggle akan menambahkan.Apabila sudah ada, toggle akan menghilangkan
        //* element.classList.item();       // untuk mengetahui class tertentu di dalam sebuah element, ex: misalnya element punya 3 class, class ketiganya apa, dimulai dari 0
        //* element.classList.contains();   // memeriksa apakah di sebuah element mempunyai class tertentu 
        //* element.classList.replace();    // mengganti class yang ada, dgn yg baru
    */
const p2 = document.querySelector(".p2");
console.log(p2.classList)
//* akan memperlihatkan ada class apa saja di dalamnya

    //* p2.classList.add("nama-class");
p2.classList.add("label")      
//* ini tidak menimpa class sebelumnya, melainkan menambah

    //* p2.classList.remove("nama-class");
p2.classList.remove("label")
//* kalau class-nya ada, maka akan di-remove kalau tidak, tidak terjadi apa-apa

    //* p2.classList.toggle("nama-class");
// p2.classList.toggle("label")    //* ini akan me-return true
//* akan memeriksa terlebih dahulu, kalau sudah ada: hapus, kalau belum: tambahkan
// p2.classList.toggle("label")    //* ini akan me-return false
//*document.body   //* tidak perlu keyword get, karena sudah ada node tersendiri
document.body.classList.toggle("biru-muda");    //* true
document.body.classList.toggle("biru-muda");    //* false
//* toggle "mungkin bisa dipakai untuk dark mode". Silahkan tunggu di materi Event

p2.classList.add("kore","rusdi","fuad");
console.log(p2.classList)
    //* p2.classList.item(index);
console.log(p2.classList.item(2));
//* memeriksa class apa yang ada di index ke-2

console.log(p2.classList.contains("kore"));     //* true
//* memeriksa apakah ada class yang diinputkan, kalau ada return true, kalau tidak false
console.log(p2.classList.contains("bampuki"));  //* false

    //* p2.classList.replace("class sudah ada", "class baru")
p2.classList.replace("kore", "bampuki");
//* akan me-replace nama class kore menjadi bampuki
console.log(p2.classList) 



    /* //* conclusion
        //* DOM Manipulation part 1
            //* captured-element.innerHTML = "value (tag,text,dll)";

            //* captured-element.style.(css-property) = "value (blue, arial, 800(font-weight) dll)"

            //* set.Attribute("attribute name", "value");
            //* get.Attribute("attribute name");
            //* remove.Attribute("attribute name")

            //* captured-element.classList
                //* captured-element.classList.add("class-name")
                //* captured-element.classList.remove("class-name")
                //* captured-element.classList.toggle("class-name")
                z//* captured-element.classList.item(index(number));
                //* captured-element.classList.contains("class-name")
                //* captured-element.classList.replace("class name within the tag", "new class name");
        //* conclusion ~end
    */