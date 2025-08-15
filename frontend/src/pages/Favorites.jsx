import "../css/Favorites.css";
import { useMovieContext } from "../assets/contexts/MovieContext";
import MovieCard from "../components/MovieCard"; // import your MovieCard

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>You haven't added any favorite movies yet!</p>
            ) : (
                <div className="favorites-grid">
                    {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
