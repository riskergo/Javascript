

//* latihan fetch

// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function(){
    
//     const inputKeyword = document.querySelector(".input-keyword");
//     fetch('http://www.omdbapi.com/?apikey=27c7497b&s=' + inputKeyword.value)
//         .then( response => response.json())
//         .then( responseMovies => {
//             let movieCards = '';
//             // const movies = responseMovies.Search;
//             responseMovies.Search.forEach( m => movieCards += addMovieList(m) );
//             const movieContainer = document.querySelector(".movie-container");
//             movieContainer.innerHTML = movieCards;

//             //* button show detail di-klik
//             const showDetailButton = document.querySelectorAll(".modal-detail-button");
//             showDetailButton.forEach( btn => {
//                 btn.addEventListener("click", function(){
//                     const imdbId = this.dataset.imdbid;
//                     fetch(`http://www.omdbapi.com/?apikey=27c7497b&i=${imdbId}`)
//                         .then(response => response.json())
//                         .then(movieDetail => {
//                             const modalBody = document.querySelector(".modal-body");
//                             modalBody.innerHTML = addMovieCard(movieDetail);
//                         });
//                 });
//             });
//         });
// });


//* refactor begin

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function(){

    //* ambil input keyword
    const inputKeyword = document.querySelector(".input-keyword");
    //* masukkan inputkeyword ke dalam variabel movies yang akan diisi 10 film

    const movies = await getMovies(inputKeyword.value);    //* assign movies function yang melakukan aksi getMovies berdasarkan value input keyword ;
    //* dengan menambahkan keyword async dan await, maka alurnya seperti ini : javascript akan menunggu fungsi getMovies(promise)nya resolve, lalu masukkan ke variabel movies

    // console.log(movies);    //* ternyata fungsi getMovies adalah asynchronous function, jadi gunakan keyword tambahan yaitu async dan await 
    //* coba melihat hasil movies dengan menggunakan method then karena movies adalah promise
    // console.log(movies);
    
    /* 
        * singkatnya, agar kode kita terlihat synchronous padahal asynchronous
    */

    //* jika langsung dijalankan fungsi updateUI ini, maka hasilnya error karena fungsi getMovies adalah fungsi asynchronous yang membutuhkan beberapa saat untuk me-return resolve (menggunakan fetch)
    updateUI(movies);   //* buat function yang parameternya berisi 10 film dan looping serta tambahkan ke dalam movie-container
});

/* 
    * tidak bisa seperti ini, karena logikanya
const modalDetailButton = document.querySelectorAll(".modal-detail-button")
showDetailButton.forEach( btn => {
    btn.addEventListener("click", function(){
        console.log("OK");
});
    * karena baris ini akan dijalankan javascript dieksekusi pertama kali
    * karena halaman masih kosong dan tidak ada class bernama modal-detail-button, karena belum diinputkan lalu diklik search
    * atau tombol show detail-nya belum ada karena kosong
 */


//* membuat event handler (tombol detail) di-klik secara terpisah
    //* event binding
    //* memberikan event pada element yang awalnya belum ada, tapi ketika sudah ada eventnya tetap bisa berjalan
document.addEventListener('click', async function(element){      //* jangan gunakan this, karena apapun yang kita klik, this-nya menghasilkan document, cek dan bandingkan melalu console.log(this) / console.log(element)
    // console.log(this);
    // console.log(element);        //* akan mengenali apa yang kita klik, dan tambahkan .target untuk mengenali elementnya
    // console.log(element.target);

    if(element.target.classList.contains('modal-detail-button')){
        //* ambil imdbid menggunakan .target.dataset
        const imdbid = element.target.dataset.imdbid;
        // console.log(imdbid);
        const movieDetail = await getMovieDetail(imdbid);
        updateUIMovieDetail(movieDetail);
    }
})

function getMovieDetail(imdbid){
    return fetch(`http://www.omdbapi.com/?apikey=27c7497b&i=${imdbid}`)
        .then(response => response.json())
        .then(mDetail => mDetail);
}

function updateUIMovieDetail(movieDetail){
    const movieModalBox = document.querySelector(".modal-body")
    movieModalBox.innerHTML = addMovieCard(movieDetail);
}


function getMovies(inputKeyword){
    //* return 10 list movie yang akan dijadikan parameter untuk function updateUI
    return fetch(`http://www.omdbapi.com/?apikey=27c7497b&s=${inputKeyword}`)
        .then(response => response.json())
        .then(movies => movies.Search);
}

function updateUI(elementMovie){
    let movieCards = '';
    elementMovie.forEach( m => movieCards += addMovieList(m));
    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = movieCards;
}


//* refactor end


//* functions (showing data)
function addMovieList(m){
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`
}

function addMovieCard(mDetail){
    return `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
            <img src="${mDetail.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${mDetail.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${mDetail.Director} </li>
                <li class="list-group-item"><strong> Actors : </strong> ${mDetail.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong> ${mDetail.Writer}</li>
                <li class="list-group-item"><strong> Plot : </strong> <br> ${mDetail.Plot}</li>
            </ul>
            </div>
        </div>
    </div>`;
}
//* functions (showing data) end