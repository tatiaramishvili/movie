import React from 'react';
import useFetchMovies from '../hooks/useFetch';
import NavBar from '../components/NavBar';
import './MoviesPage.css';

const MoviesPage = () => {
  const { movies, loading, error } = useFetchMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movies-page">
      <NavBar />
      <div className="content">
        <h1>Movies</h1>
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
