

//* latihan fetch

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function(){
    
    const inputKeyword = document.querySelector(".input-keyword");
    fetch('http://www.omdbapi.com/?apikey=27c7497b&s=' + inputKeyword.value)
        .then( response => response.json())
        .then( responseMovies => {
            let movieCards = '';
            const movies = responseMovies.Search;
            movies.forEach( m => movieCards += addMovieList(m) );
            const movieContainer = document.querySelector(".movie-container");
            movieContainer.innerHTML = movieCards;

            //* button show detail di-klik
            const showDetailButton = document.querySelectorAll(".modal-detail-button");
            showDetailButton.forEach( btn => {
                btn.addEventListener("click", function(){
                    const imdbId = this.dataset.imdbid;
                    fetch(`http://www.omdbapi.com/?apikey=27c7497b&i=${imdbId}`)
                        .then(response => response.json())
                        .then(movieDetail => {
                            const modalBody = document.querySelector(".modal-body");
                            modalBody.innerHTML = addMovieCard(movieDetail);
                        });
                });
            });
        });
});



function addMovieList(m){
    return `<div class="col-md-4 my-3">
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
    return `<div class="container-fluid">
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