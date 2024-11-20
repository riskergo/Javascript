$(".search-button").on("click", function (){
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=27c7497b&s=" + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach( elementMovie => {
                cards += showCards(elementMovie);   //* coba merapikan dengan pemisahan menggunakan function
            });
            $('.movie-container').html(cards);
    
            //* ketika tombol show details di-klik
                /* 
                    * untuk kasus ini, sebaiknya gunakan function biasa karena arrow function tidak punya scope keyword this
                    * jikalau menggunakan event handler seperti ini, lebih disarankan gunakan function biasa karena kita membutuhkan thisnya
                 */
            $(".modal-detail-button").on("click", function(){       
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=27c7497b&i=" + $(this).data("imdbid"),
                    success: m => {
                        const movieDetail = showMovieDetail(m);     //* coba merapikan dengan pemisahan menggunakan function
                        $(".modal-body").html(movieDetail);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                })
            });
        },
        error: (e) => {
            // * jika error
            console.log(e.responseText);
        }
    })
})




//* functions
function showCards(elementMovie){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${elementMovie.Poster}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${elementMovie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${elementMovie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${elementMovie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title}</h4></li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director} </li>
                        <li class="list-group-item"><strong> Actors : </strong> ${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                        <li class="list-group-item"><strong> Plot : </strong> <br> ${m.Plot}</li>
                    </ul>
                    </div>
                </div>
            </div>`;
}