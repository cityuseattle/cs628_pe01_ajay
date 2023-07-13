import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Fast and Furious',
      genre: 'Action',
      releaseYear: 2020
    },
    {
      title: 'The Mask',
      genre: 'Comedy',
      releaseYear: 2019
    },
    {
      title: 'Sound of Freedom',
      genre: 'Drama',
      releaseYear: 2021
    },
    {
      title: 'Killers of the Flower Moon',
      genre: 'Drama',
      releaseYear: 2021
    }
  ]);

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  const filteredMovies = selectedGenre !== 'All Genres'
    ? movies.filter(movie => movie.genre === selectedGenre)
    : movies;

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-heading">Movie List</h1>

      <div className="genre-filter">
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          {uniqueGenres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <section className="movie-section">
        {filteredMovies.map(movie => (
          <div className="movie-card" key={movie.title} onClick={() => handleMovieClick(movie.title)}>
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovieList;
