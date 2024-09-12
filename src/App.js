// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://example.com/inception.jpg', rating: 8.8 },
    { title: 'Interstellar', description: 'A space epic', posterURL: 'https://example.com/interstellar.jpg', rating: 8.6 },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (filter.title === '' || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.rating === '' || movie.rating >= filter.rating)
    );
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
