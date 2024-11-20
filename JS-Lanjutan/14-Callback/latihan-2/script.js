$(".search-button").on("click", function(){
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=27c7497b&s=" + $(".input-keyword").val(),
        success: elementResult => {
            // console.log(elementResult.Search);
            const movies = elementResult.Search;
            // console.log(movies);
            let card = ``;
            movies.forEach( movie => {
                card += showCard(movie);
            })
            $(".movie-container").html(card);
            // *event handler dengan function biasa (bukan arrow karena membutuhkan keyword this)
            $(".modal-detail-button").on("click", function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=27c7497b&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showMovieDetails(m);
                        $(".modal-body").html(movieDetail);
                    },
                    error: e => console.log(e.responseText)
                })
            });
    
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })
    
    //* functions
    
    function showCard(eMovie) {
        return `
            <div class="col-md-4 my-4">
                <div class="card">
                    <img src="${eMovie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${eMovie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${eMovie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${eMovie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
        ;
    }
})



function showMovieDetails(eMovieDetail){
    return `
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
                <img src="${eMovieDetail.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item"><h4>${eMovieDetail.Title} (${eMovieDetail.Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${eMovieDetail.Director} </li>
                <li class="list-group-item"><strong>Actors : </strong> ${eMovieDetail.Actors} </li>
                <li class="list-group-item"><strong>Writer : </strong> ${eMovieDetail.Writer} </li>
                <li class="list-group-item"><strong> Release Date :  </strong> ${eMovieDetail.Released} </li>
                <li class="list-group-item"><strong>Plot : </strong> <br> <p>${eMovieDetail.Plot}</p> </li>
                </ul>
            </div>
            </div>
        </div>`
    ;
}