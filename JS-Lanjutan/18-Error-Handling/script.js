
    //* ERROR HANDLING
    //* mengetahui error di fetch
//* jika mendapat result berupa reject (rejected) sebab pada code sebelumnya hanya menjalankan ketika fulfilled (resolve)saja

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {

    //* menggunakan try and catch pada async & await
    try{
        const inputKeyword = document.querySelector(".input-keyword").value;
        const movies = await getMovies(inputKeyword);
        updateUI(movies);
    }catch(err){
        if(err.message === "401"){
            console.log(err);
        }else{
            alert(err.message);
        }
    }

    /* 
            * error yang ditangkap saat ini adalah saat film tidak ada atau input search kosong
            * tapi apa saja yang bisa ditangkap oleh catch ini?
            * contoh, ketika url API-nya salah
            * ternyata error-nya tampil ke console tetapi tapi tidak tertangkap oleh catch
            * 
            * error yang ditangkap oleh fetch hanya error yang ada pada network/url-nya saja
            * maka, error yang tadi (input search kosong & film tidak ditemukan) adalah error dari browser, bukan dari API/network
            * karena ketika ingin menjalankan fungsi updateUI(movies), parameter movies yang dilemparkan kosong
            * 
            * ketika fungsi updateUI dimatikan lalu mencari film yang tidak ada atau input search kosong
            * tidak ada yang error karena tidak ada yang masuk ke dalam catch, DAN fetch akan reject/gagal ketika network error
            * barulah tertangkap errornya
            * 
            * cara untuk menangkap error ketika film tidak ada dan ketika api key-nya salah (unathorized)
        */

    
});

function getMovies(inputKeyword) {
    return fetch('http://www.omdbapi.com/?apikey=27c7497b&s=' + inputKeyword)
    
        /* 
            * http://www.omdbapi.com/?apikey=27c7497b&s=
            * menangkap error secara manual di dalam fetch berbentuk promise ini dan method .json() hanya akan jalan ketika data-nya sudah benar atau
            * ketika film-nya ada, ketika ada yang diisikan di dalam kolom pencarian
            * jadi lakukan pengecekan melalui pengkondisian 
            * 
            * ketika key-nya salah, maka akan mengembalikan error dan ambil error-nya dan masukkan ke pengkondisian
         */

        .then(response => response.json())
        /* 
            if( !response.ok ){       //* ketika response-nya not OK / gagal
                //* lempar error ke dalam catch dengan menggunakan keyword throw 
                console.log(response);
                throw new Error(response.status)    //* lempar error yang berisi response.statusText (jika api key salah, maka statusTextnya unathorized) tapi 
                                                        //* APInya sekarang tidak menambahkan value pada key statusText
            }
            return response.json();

            * di dalam api baru, response invalid api key ada di error massage setelah diolah dengan method response.json()
        */
        .then(elMovies => {
            //* melakukan pengecekan API jika ada isinya
            // console.log(elMovies);

            if(elMovies.Response === 'False'){
                /* if( elMovies.Error === 'Invalid API key!' ){
                    throw new Error("Invalid API Key!")
                }else if(elMovies.Error === 'Incorrect IMDb ID.'){
                    throw new Error("Harap Masukkan Nama Film")
                }else if( elMovies.Error === 'Movie not found!'){
                    throw new Error("Film tidak ditemukan")
                }   //* convert ke switch
                */
               switch (elMovies.Error) {
                case 'Invalid API key!':
                    throw new Error("Invalid API Key!");
                case 'Incorrect IMDb ID.':
                    throw new Error("Harap Masukkan Nama Film");
                case 'Movie not found!' :
                    throw new Error("Film tidak ditemukan");
               }
            }

            //* jika tidak ada masalah
            // console.log(elMovies);
            return elMovies.Search;
        });
}

function updateUI(elMovies) {
    let cards = '';
    elMovies.forEach(m => cards += addMovies(m));
    const movieContainer = document.querySelector(".movie-container")
    movieContainer.innerHTML = cards;
}

function addMovies(movie) {
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`;
}







document.addEventListener("click", async function (element) {
    if (element.target.classList.contains('modal-detail-button')) {
        const imdbid = element.target.dataset.imdbid;
        try{
            const movieDetailData = await getMovieDetail(imdbid);
            updateUIMovieDetail(movieDetailData);
        }catch(err){
            if(err){
                updateUIMovieDetail(err.message)
            }
        }
    }    
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=27c7497b&i=' + imdbid)
        .then(response => {
            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(mDetail => {
        //    console.log(mDetail.Response)
            if(mDetail.Response === 'False'){
                throw new Error(mDetail.Error);
            }
            return mDetail;
        });
}


function updateUIMovieDetail(movieData) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = addMovieCard(movieData);
}


function addMovieCard(movieDetailData) {
    // console.log(movieDetailData === '401');
    if(movieDetailData === '401'){
        return `
         <div class="container-fluid">
            <div class="row">
                <div class="col">
                <h1 class="text-center">EMPTY</h1>
            </div>
        </div>`;
    }
    return `
  <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
            <img src="${movieDetailData.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${movieDetailData.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${movieDetailData.Director} </li>
                <li class="list-group-item"><strong> Actors : </strong> ${movieDetailData.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong> ${movieDetailData.Writer}</li>
                <li class="list-group-item"><strong> Plot : </strong> <br> ${movieDetailData.Plot}</li>
            </ul>
            </div>
        </div>
    </div>`;
}