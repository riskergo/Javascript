
//* latihan refactoring fetch

//* api search : http://www.omdbapi.com/?apikey=27c7497b&s=avengers
//* api show detail by id : http://www.omdbapi.com/?apikey=27c7497b&i=

//* tangkap search button
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function(){

  const inputKeyword = document.querySelector(".input-keyword").value;
  const movies = await getMovies(inputKeyword);
  updateUI(movies);
});

document.addEventListener("click", async function(element){
  if(element.target.classList.contains('modal-detail-button')){
    const imdbid = element.target.dataset.imdbid;
    const movieDetailData = await getMovieDetail(imdbid);
    updateUIMovieDetail(movieDetailData);
  }
});

function getMovieDetail(imdbid){
  return fetch('http://www.omdbapi.com/?apikey=27c7497b&i=' + imdbid)
          .then(response => response.json())
          .then(mDetail => mDetail);
}



function getMovies(inputKeyword){
  return fetch('http://www.omdbapi.com/?apikey=27c7497b&s=' + inputKeyword)
          .then(response => response.json())
          .then(elMovies => elMovies.Search);
}

function updateUIMovieDetail(movieData){
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = addMovieCard(movieData);
}

function updateUI(elMovies){
  let cards = '';
  elMovies.forEach(m => cards += addMovies(m));
  const movieContainer = document.querySelector(".movie-container")
  movieContainer.innerHTML = cards;
}


function addMovies(movie){
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

function addMovieCard(movieDetailData){
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