
//* api : "http://www.omdbapi.com/?apikey=27c7497b&s=fury"

//* membuat contoh promise

/* const janji1 = new Promise( (resolve, reject) => {
    if(true){
        resolve("Janji Ditepati");
        //* jika kondisi if yang diinputkan hanya boolean, yang di bawah ini tidak berjalan
    }else {
        reject("Janji Ditepati");
    }
}); */



let ditepati = false;
const janji1 = new Promise( (resolve, reject) => {
    if(ditepati){
        resolve("Janji Ditepati");
    }else {
        reject("Janji Tidak ditepati");
    }
});

//* tampilkan ke dalam console
janji1
    .then( response => console.log(`OK ! ${response}`))
    .catch( response => console.log(`NOT OK ! ${response}`));