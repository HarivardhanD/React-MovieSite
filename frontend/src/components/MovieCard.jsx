// {} this gives us space to insert javascript code
// alt is alternative ,when image cant load then display movie.title
function MovieCard({movie}){
    function onFavoriteClick(){
        alert("Clicked")
    }
    return <div className="movie-card"> 
        <div className="movie-poster">
            <img src={movie.url}alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    🤍
                </button>

            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>


    </div> // movie card div close - > main div

}

export default MovieCard; //allows us to export the component MovieCard