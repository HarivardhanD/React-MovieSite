import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // searchQuery is the initial state and when we search in searchBar it sets setSearchQuery to the new thing we searched and then sets earchQuery to setSearchQuery

  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadpopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);

        setError("Failed to load movies ...");
      } finally {
        setLoading(false);
      }
    };
    loadpopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault(); // when we submit the page refreshes and our search text disappears , this prevents that.
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies ...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search the movie"
          className="Search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="Search-btn">
          search
        </button>
      </form>
      {loading && <p>Loading movies ...</p>}
      {error && <p className="error">{error}</p>}
      <div className="Movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
