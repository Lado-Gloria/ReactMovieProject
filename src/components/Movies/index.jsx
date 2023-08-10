import React, { useState, useEffect } from "react";
import { getMovies, getGenres } from "../../utils/utilities";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Navbar from "../../navbar";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  
  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [selectedGenre]); // Refetch movies when the selectedGenre changes

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const fetchedMovies = await getMovies(selectedGenre);
      setMovies(fetchedMovies.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      setLoading(false);
    }
  };

  const fetchGenres = async () => {
    try {
      const fetchedGenres = await getGenres();
      setGenres(fetchedGenres.genres);
    } catch (error) {
      console.error("Error fetching genres:", error.message);
    }
  };

  const handleGenreChange = (event) => {
    const selectedGenreId = event.target.value;
    setSelectedGenre(selectedGenreId);
  };

  if (loading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  return (
    <div>
      {/* Display the genre navbar */}
      <div className="genreNavbar">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genreNavItem ${genre.id === selectedGenre ? "active" : ""}`}
            onClick={() => setSelectedGenre(genre.id)}>
            {genre.name}
          </div>
        ))}
      </div>
      {/* Display the movies based on the selected genre */}
      <div className="imageContainer">
        {movies && movies.length > 0 ? (
          movies.map((item) => (
            <Link to={`/MovieDetails/${item.id}`} key={item.id}>
              <div className="images">
                <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
              </div>
            </Link>
          ))
        ) : (
          <h3>No movies found for the selected genre.</h3>
        )}
      </div>
    </div>
  );
};

export default MovieList;
