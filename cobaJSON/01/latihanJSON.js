
    //* stringify, untuk ENCODE JSON dari object ke json
let mhs1 = {
    nama: "koree",
    nim: "130192",
    lulus: false
}

// console.log(mhs1);
// console.log(JSON.stringify(mhs1));

//* dengan vanila js, menggunakan ajax untuk decode JSON ke Object



let decodeJSONVJ = new XMLHttpRequest();
// console.log(decodeJSONVJ)
decodeJSONVJ.onreadystatechange = function (data){
    if(decodeJSONVJ.readyState === 4 && decodeJSONVJ.status == 200){
        //* cek json-nya, tapi masih dalam bentuk json
        // let mhs1 = this.responseText;
        //* gunakan json.parse
        let mhs1 = JSON.parse(this.responseText);
        console.log(mhs1);
    }
}

//* menjalankan ajax
decodeJSONVJ.open("get", "coba.json", true)
decodeJSONVJ.send()

//* dengan jquery tapi harus ada internet
