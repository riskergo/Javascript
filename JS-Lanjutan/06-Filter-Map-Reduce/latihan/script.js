

//* ALGO:

//* ambil semua element video (getElement/querySelector)
//* karena hasilnya adalah node-list maka :
const dataVideo = Array.from(document.querySelectorAll("ul>li"));       //* gunakan sebuah fungsi pengubahan array, yaitu Array.from
//* atau artinya ubah menjadi Array dari(.from) selected document
// console.log(dataVideo);

//* pilih yang hanya javascript lanjutan (filter)


const jsLanjutan = dataVideo.filter( elementVideo => elementVideo.innerText.includes("JAVASCRIPT LANJUTAN"))        //* coba chaining


//* ambil masing-masing durasi video
    //* versi panjang
// const durationOfVideo = [];
// jsLanjutan.forEach((element) => durationOfVideo.push(element.getAttribute("data-duration")))
// console.log(durationOfVideo);
    //* versi singkat, gunakan dataset.duration ==> dataset.namaAttributnya
    .map( (elementVideo) => elementVideo.dataset.duration )     //* chaining lagi


//* ubah durasi menjadi float/number dan menit menjadi detik
    .map( waktu  => {
        //* durasi 10:30 -> [10, 30]    caranya di-split  menggunakan method split("delimiter/pembatasnya")  di sini delimiter/pembatasnya adalah titik dua (:) yang dimasukkan ke dalam array baru
        const parts = waktu.split(":").map((part) => { return parseFloat(part) });     //* menggunakan nested method yaitu map dan parseInt
        return (parts[0] * 60 + parts[1]);
    })

//* jumlahkan semua detik
    .reduce( (total, detik) => { return total + detik },0 );


//* ubah formatnya menjadi jam menit dan detik
const jam = Math.floor(jsLanjutan / 3600);  //* pembulatan ke bawah, gunakan floor; atas, ceil; terdekat, round

const menit = Math.floor((jsLanjutan - jam * 3600) / 60);

const detik = (jsLanjutan - jam * 3600) - menit * 60;
    // console.log(detik);

//* simpan dengan menggunakan DOM

const jumlahVideoJSLanjutan = dataVideo.filter( elementVideo => elementVideo.innerText.includes("JAVASCRIPT LANJUTAN")).length;
const pJumlahVideo = document.querySelector("span.jumlah-video");
pJumlahVideo.innerText = `${jumlahVideoJSLanjutan} Video`;

const pTotalDurasi = document.querySelector("span.total-durasi");
pTotalDurasi.innerText = `${jam} jam ${menit} menit ${detik} detik`

// console.log(jumlahVideo);
// console.log(totalDurasi);

/* 

    //* yang baru didapat
        //* Array.from  --> mengkonversi nodelist atau mungkin bisa juga HTMLCollection menjadi array asli
        //* includes()  --> method untuk mengambil innerText (yg baru diketahui)
        //* split() --> method untuk memisahkan isi array split(delimiter/pembatasnya) lalu me-return hasil yang sudah dipisahk
        //* .dataset untuk mengambil custom attribute yang dibuat pada tag html saat menggunakan DOM .dataset.namaAttribute-nya;

*/