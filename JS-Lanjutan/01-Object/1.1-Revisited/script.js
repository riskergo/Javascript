    //* pembuatan object
//* 1. literal object
const testObject1 = {
    nama: "koree",
    umur: 19,
    tampil: function(){
        console.log(`nama ${this.nama} berumur ${this.umur} tahun`)     //* gunakan backtick ``
    }
};

//* 2. function declaration
function pembuatanObject(nama,umur){
    let obj = {};

    obj.nama = nama;
    obj.umur = umur;
    obj.tampil = function(){
        console.log(`nama ${this.nama} berumur ${this.umur} tahun`);
    };
    obj.tambahNamaBelakang = function(parameterNamabelakang){
        this.nama += " ";
        this.nama += parameterNamabelakang;
    }

    return obj;
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