    //* pembuatan object
//* 1. literal object
    //* kelemahan: tidak efektif jika ingin membuat object yang banyak
const testObject1 = {
    nama: "koree",
    umur: 19,
    tampil: function(){
        console.log(`nama ${this.nama} berumur ${this.umur} tahun`)     //* gunakan backtick ``
    }
};

//* 2. function declaration

//* object yang menampung fungsi untuk pembuatan object melalui function declaration line 41-42
const methodForPembuatanObject = {
    tampil: function(){
        console.log(`nama ${this.nama} berumur ${this.umur} tahun`);
    },
    tambahNamaBelakang: function(parameterNamabelakang){
        this.nama += " ";
        this.nama += parameterNamabelakang;
    },

    //* ditambahkan fungsi baru:
    tambahNamaPanggilan: function(parameterNamaPanggilan){
        this.nama += ", nama panggilannya : " + parameterNamaPanggilan;
    }   //* maka... cek baris 51
}
function pembuatanObject(nama,umur){
    
    //* sebuah method di function declaration untuk pembuatan object akan dibuat/disimpan ketika di-instansiasi(pembuatan object) baru
    //* maka pindahkan function ini ke dalam sebuah object baru dengan menggunakan pembuatan object literal yang hanya berisi function
    /* obj.tampil = function(){
        console.log(`nama ${this.nama} berumur ${this.umur} tahun`);
    };
    obj.tambahNamaBelakang = function(parameterNamabelakang){
        this.nama += " ";
        this.nama += parameterNamabelakang;
    } */
    //* untuk menautkan/menghubungkan dengan function declaration pembuatan object ini, gunakan:
    // obj.tampil = methodForPembuatanObject.tampil;                               //* tidak perlu tanda kurung supaya tidak langsung dijalankan dan hanya dijalankan bila dipanggil saja
    // obj.tambahNamaBelakang = methodForPembuatanObject.tambahNamaBelakang;       //* sama
    //* dengan cara ini, saat program dijalankan, object yang di baris 15 hanya disimpan sekali saja di dalam memory
    //* lalu ketika function ini dan mengisi method di atas ini, maka hanya mengacu ke object yang sudah ada di memory tadi, mirip pass by reference
    //* dibandingkan sebelumnya jika di-instansiasi maka method-nya akan dibuat sesuai beberapa object yang diinstansiasikan

    // obj.tambahNamaPanggilan = methodForPembuatanObject.tambahNamaPanggilan;     //* harus ditambahkan pula method-nya
    //* jadi mengelola 2 buah object sekaligus. Bila dihapus method-nya harus dihapus pula method yang di sini
    //* itulah kelemahannya, tidak OTOMATIS
    /* 
        //* tapi apa kelemahannya?, cek di object literal di atas (line 24
    */
    //* untuk yang otomatisnya ialah, menggunakan object.create(parentObject/linkingObject);
    //* assign object.create ke pembuatan object di dalam fungsi ini
    // let obj = {};    //* dari ini, menjadi:
    let obj = Object.create(methodForPembuatanObject);  
    obj.nama = nama;
    obj.umur = umur;
    //* jadi tidak perlu menambahkan/mengelola function declaration ini jika ada tambahan method pada object yang terhubung
    //* coba di console 

    return obj;

    //* tapi walaupun menggunakan beberapa solusi di atas, tetap saja yang kita perlukan itu hanya function declaration saja bukan object terpisah yang..
    //* isinya method terkait ke function declaration ini
    //* maka gunakan PROTOTYPE
};
let testObject2 = pembuatanObject("rusdi", 29);

//* 3. constructor function
function PembuatanObjectWithConstructor(nama, umur){    //* untuk membedakan function declaration dgn function constructor, tambahkan hurur besar
    this.nama = nama;                                   //* pada nama constructor function
    this.umur = umur
    this.tampil = function(){
        console.log(`nama ${this.nama} berumur ${this.umur}`)
    }
    this.tambahNamaBelakang = function(namaBelakangnya){
        this.nama += " ";
        this.nama += namaBelakangnya;
    };

    //* tidak perlu membuat variabel dan menambahkan return
};

let testObject3 = new PembuatanObjectWithConstructor("fuad", 13);

//* 4. object create ?