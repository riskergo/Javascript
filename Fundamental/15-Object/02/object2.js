// dengan cara literal
let handphone = {
    type: "Android",
    os: "MIUI",
    brand: "Xiaomi",
    name: "Redmi Note 8"
}
// coba ke-2x 
let handphone2 = {
    type: "Android",
    os: "Hyper OS",
    brand: "POCO",
    name: "F6"
}



// dengan function declaration
function buatHP(type, os, brand, name){
    
    // buat variabel bertipe object
    let handphone = {};
    // assign property-nya dengan parameter
    handphone.type = type;
    handphone.os = os;
    handphone.brand = brand;
    handphone.name = name;
    // dan jangan lupa return
    return handphone;
}
// coba buat variabel melalui pemanggilan function declaration object
let handphone3 = buatHP("Iphone", "iOS", "Apple", "Iphone 14 PRO MAX");




// dengan constructor
// mirip dengan function declaration
// tapi ada perbedaannya
function BuatHP(type, os, brand, name){     // untuk membedakan function biasa dan-
    // function constructor, nama function constructor diawali dengan
    // huruf kapital
    // mirip seperti pembuatan class pada OOP
    
    // let handphone = {}   <-----  ini tidak diperlukan
    
    // assign menggunakan keyword this
    this.type = type;
    this.os = os;
    this.brand = brand;
    this.name = name;

    // return       <----- ini juga tidak diperlukan
}

// coba buat
let handphone4 = new BuatHP("Android", "Realme UI", "Realme", "Realme GT 6");
// di sini memakai keyboard new, supaya menunjukkan itu adalah function constructor